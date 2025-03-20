import * as excel from 'exceljs';

export function trackPageTime(page, timeSpent, sessionId, brand, navigatedAwayBy) {
	window.electronAPI
		.trackTime(page, timeSpent, sessionId, brand, navigatedAwayBy)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}

export function trackAction(page, action, sessionId, brand) {
	window.electronAPI
		.trackAction(page, action, sessionId, brand)
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
		const header = ['Session ID', 'Brand', 'Journey', 'Time Spent (seconds)', 'Navigated Away By', 'Timestamp/Sequence'];
		worksheet.addRow(header);

		// Iterate through sessions
		for (const sessionId in data.sessions) {
			const sessionBrands = data.sessions[sessionId].brands;

			// Iterate through brands
			for (const brand in sessionBrands) {
				const currentBrand = sessionBrands[brand];

				// Add each page visit to the journey
				currentBrand.journey.forEach((visit) => {
					let timeSpent = visit.timeSpent;

					worksheet.addRow([sessionId, brand, visit.page, timeSpent, visit.navigatedAwayBy, visit.timestamp]);
				});

				// Add an aggregate summary at the end of the session
				const aggregateHeader = ['', 'Session Summary', '', '', '', ''];
				worksheet.addRow(aggregateHeader);
				const pages = Object.keys(currentBrand.aggregate);
				pages.forEach((page) => {
					worksheet.addRow([sessionId, 'Total for:', page, currentBrand.aggregate[page], '', '']);
				});
				worksheet.addRow([sessionId, 'Total Time Spent on Brand:', '', currentBrand.total, '']);
			}

			// Add a separator between sessions
			worksheet.addRow(['', '', '', '', '', '']);
			worksheet.addRow(['---', '---', '---', '---', '---', '---']);
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
