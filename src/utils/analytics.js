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
			alert('No time tracking data available.'); // Or a better user notification
			return;
		}

		const workbook = new excel.Workbook();
		const worksheet = workbook.addWorksheet('Time Tracking');

		// Create header row
		const header = ['Session ID', 'Page', 'Time Spent (seconds)'];
		worksheet.addRow(header);

		// Add data rows
		for (const sessionId in data.sessions) {
			for (const page in data.sessions[sessionId]) {
				const timeSpent = data.sessions[sessionId][page];
				worksheet.addRow([sessionId, page, timeSpent]);
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
