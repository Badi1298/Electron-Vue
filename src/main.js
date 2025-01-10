import { app, BrowserWindow, ipcMain } from 'electron';

import path from 'node:path';
import { existsSync, readFile, writeFile, readFileSync } from 'node:fs';

import started from 'electron-squirrel-startup';

// const filePath = path.join(__dirname, 'time-tracking.json');

ipcMain.handle('write-time-data', async (_, page, timeSpent) => {
	try {
		// Read the existing data asynchronously
		const data = existsSync('time-tracking.json')
			? JSON.parse(
					readFileSync('time-tracking.json', {
						encoding: 'utf-8',
					})
			  )
			: {};

		data[page] = (data[page] || 0) + timeSpent;

		// Write the updated data asynchronously
		writeFile('time-tracking.json', JSON.stringify(data, null, 2), (err) => {
			if (err) {
				console.error('Error writing to file:', err);
				return 'error';
			}
		});

		return 'success';
	} catch (err) {
		console.error('Error writing to file:', err);
		return 'error';
	}
});

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
	app.quit();
}

const createWindow = () => {
	console.log(path.join(__dirname, 'preload.js'));
	// Create the browser window.
	const mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
		},
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
