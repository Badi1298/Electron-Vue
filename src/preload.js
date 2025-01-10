import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
	trackTime: (page, timeSpent) => ipcRenderer.invoke('write-time-data', page, timeSpent),
});
