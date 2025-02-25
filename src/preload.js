import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	trackTime: (page, timeSpent, sessionId) => ipcRenderer.invoke('write-time-data', page, timeSpent, sessionId),
	getTimeTrackingData: () => ipcRenderer.invoke('get-time-tracking-data'),
	saveExcelFile: (buffer) => ipcRenderer.invoke('save-excel-file', buffer),
});
