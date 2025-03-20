import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	trackTime: (page, timeSpent, sessionId, brand, navigatedAwayBy) =>
		ipcRenderer.invoke('write-time-data', page, timeSpent, sessionId, brand, navigatedAwayBy),
	trackAction: (page, action, sessionId, brand) => ipcRenderer.invoke('write-action-data', page, action, sessionId, brand),
	getTimeTrackingData: () => ipcRenderer.invoke('get-time-tracking-data'),
	saveExcelFile: (buffer) => ipcRenderer.invoke('save-excel-file', buffer),
});
