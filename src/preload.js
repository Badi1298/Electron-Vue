import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	trackTime: (page, timeSpent, sessionId, brand) => ipcRenderer.invoke('write-time-data', page, timeSpent, sessionId, brand),
	getTimeTrackingData: () => ipcRenderer.invoke('get-time-tracking-data'),
	saveExcelFile: (buffer) => ipcRenderer.invoke('save-excel-file', buffer),
});
