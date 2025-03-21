import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import './index.css';

import path from 'node:path';
import { existsSync, writeFileSync, readFileSync } from 'node:fs';

import started from 'electron-squirrel-startup';
import { format } from 'date-fns';

const dataPath = app.getPath('userData');
const filePath = path.join(dataPath, 'time-tracking.json');

if (!existsSync(filePath)) {
	try {
		writeFileSync(filePath, '{}'); // Initialize with an empty JSON object
		console.log('time-tracking.json created successfully');
	} catch (createErr) {
		console.error('Error creating time-tracking.json:', createErr);
	}
}

ipcMain.handle('write-time-data', async (_, page, timeSpent, sessionId, brand, navigatedAwayBy) => {
	try {
		if (brand === 'NONE') {
			return 'success';
		}

		const data = JSON.parse(readFileSync(filePath, { encoding: 'utf-8' }));

		if (!data.sessions) {
			data.sessions = {};
		}

		if (!brand) {
			throw new Error('Brand is required');
		}

		if (!sessionId) {
			sessionId = crypto.randomUUID();
		}

		if (!data.sessions[sessionId]) {
			data.sessions[sessionId] = { brands: {} };
		}

		// Ensure session exists within the brand
		if (!data.sessions[sessionId].brands[brand]) {
			data.sessions[sessionId].brands[brand] = { journey: [], aggregate: {}, total: 0 };
		}

		// Append to journey
		data.sessions[sessionId].brands[brand].journey.push({
			page,
			navigatedAwayBy,
			timeSpent,
			timestamp: format(new Date(), 'pp'),
		});

		// Update aggregate time spent on the page
		data.sessions[sessionId].brands[brand].aggregate[page] = (data.sessions[sessionId].brands[brand].aggregate[page] || 0) + timeSpent;

		// Update total time spent
		data.sessions[sessionId].brands[brand].total += timeSpent;

		writeFileSync(filePath, JSON.stringify(data, null, 2));

		return 'success';
	} catch (err) {
		console.error('Error writing to file:', err);
		return 'error';
	}
});

ipcMain.handle('write-action-data', async (_, page, action, sessionId, brand) => {
	try {
		if (brand === 'NONE') {
			return 'success';
		}

		const data = JSON.parse(readFileSync(filePath, { encoding: 'utf-8' }));

		if (!data.sessions[sessionId].brands[brand].actions) {
			data.sessions[sessionId].brands[brand].actions = [];
		}

		data.sessions[sessionId].brands[brand].actions.push({
			page,
			action,
			timestamp: format(new Date(), 'pp'),
		});

		writeFileSync(filePath, JSON.stringify(data, null, 2));

		return 'success';
	} catch (err) {
		console.error('Error writing action data:', err);
		return 'error';
	}
});

ipcMain.handle('get-time-tracking-data', async () => {
	try {
		const data = JSON.parse(readFileSync(filePath, { encoding: 'utf-8' }));
		return data;
	} catch (err) {
		console.error('Error reading time-tracking data:', err);
		return null; // Or throw an error
	}
});

ipcMain.handle('save-excel-file', async (_, buffer) => {
	const { filePath } = await dialog.showSaveDialog({
		title: 'Save Excel File',
		defaultPath: `time-tracking.xlsx`,
		filters: [{ name: 'Excel Files', extensions: ['xlsx'] }],
	});

	if (filePath) {
		try {
			writeFileSync(filePath, buffer);
			return 'success';
		} catch (error) {
			console.error('Error saving Excel file:', error);
			return 'error';
		}
	}
	return 'cancelled';
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
	app.quit();
}

const createWindow = () => {
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
	});

	mainWindow.on('enter-full-screen', () => {
		mainWindow.setMenuBarVisibility(false);
	});

	mainWindow.on('leave-full-screen', () => {
		mainWindow.setMenuBarVisibility(true);
	});

	// and load the index.html of the app.
	if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
		mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
	} else {
		mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
	}

	// Open the DevTools.
	mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
