import * as excel from 'exceljs';

export function trackPageTime(page, timeSpent, sessionId, brand) {
	window.electronAPI
		.trackTime(page, timeSpent, sessionId, brand)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}

export async function exportToExcel() {
	try {
		const data = await window.electronAPI.getTimeTrackingData();

		if (!data || !data.brands || Object.keys(data.brands).length === 0) {
			alert('No time tracking data available.');
			return;
		}

		const workbook = new excel.Workbook();
		const worksheet = workbook.addWorksheet('Time Tracking');

		// Create header row
		const header = ['Brand', 'Session ID', 'Journey', 'Time Spent (seconds)', 'Timestamp/Sequence'];
		worksheet.addRow(header);

		// Iterate through brands
		for (const brand in data.brands) {
			const brandSessions = data.brands[brand].sessions;

			// Iterate through sessions within each brand
			for (const sessionId in brandSessions) {
				const session = brandSessions[sessionId];

				// Add each page visit to the journey
				session.history.forEach((visit, index) => {
					let timeSpent = visit.timeSpent;

					// if (index === session.history.length - 1 && visit.timeSpent > 30) {
					// 	timeSpent -= 30;
					// }

					worksheet.addRow([brand, sessionId, visit.page, timeSpent, `Visit #${index + 1}: ${visit.timestamp}`]);
				});

				// Add an aggregate summary at the end of the session
				const aggregateHeader = ['', 'Session Summary', 'Page', '', ''];
				worksheet.addRow(aggregateHeader);
				const pages = Object.keys(session.aggregate);
				pages.forEach((page, idx) => {
					worksheet.addRow([brand, 'Total for:', page, session.aggregate[page], '']);

					// Add an empty row after the last page for readability
					if (idx === pages.length - 1) {
						worksheet.addRow(['', '', '', '', '']); // Empty row
					}
				});
			}
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
