import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	trackTime: (page, timeSpent, sessionId) => ipcRenderer.invoke('write-time-data', page, timeSpent, sessionId),
});
