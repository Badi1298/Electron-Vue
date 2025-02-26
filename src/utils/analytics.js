import * as excel from 'exceljs';

export function trackPageTime(page, timeSpent, sessionId) {
	window.electronAPI
		.trackTime(page, timeSpent, sessionId)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}

export async function exportToExcel() {
	try {
		const data = await window.electronAPI.getTimeTrackingData();

		if (!data || !data.sessions || Object.keys(data.sessions).length === 0) {
			alert('No time tracking data available.');
			return;
		}

		const workbook = new excel.Workbook();
		const worksheet = workbook.addWorksheet('Time Tracking');

		// Create header row
		const header = ['Session ID', 'Page', 'Time Spent (seconds)', 'Timestamp/Sequence'];
		worksheet.addRow(header);

		// Add user journey (history) data
		for (const sessionId in data.sessions) {
			const session = data.sessions[sessionId];

			// Add each page visit to the journey
			session.history.forEach((visit, index) => {
				worksheet.addRow([sessionId, visit.page, visit.timeSpent, `Visit #${index + 1}: ${visit.timestamp}`]);
			});

			// Add an aggregate summary at the end of the session
			const aggregateHeader = ['Session Summary', '', ''];
			worksheet.addRow(aggregateHeader);
			const pages = Object.keys(session.aggregate);
			pages.forEach((page, idx) => {
				worksheet.addRow([sessionId, page, session.aggregate[page], '']);

				// Check if this is the last page, and add an empty row after the last one
				if (idx === pages.length - 1) {
					worksheet.addRow(['', '', '', '']); // Empty row
				}
			});
		}

		const buffer = await workbook.xlsx.writeBuffer();

		const result = await window.electronAPI.saveExcelFile(buffer);

		if (result === 'success') {
			console.log('Excel file saved successfully!');
		} else if (result === 'cancelled') {
			console.log('Save operation cancelled.');
		} else {
			console.error('Error saving Excel file:', result);
		}
	} catch (error) {
		console.error('Error exporting to Excel:', error);
	}
}
