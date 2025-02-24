export function trackPageTime(page, timeSpent, sessionId) {
	window.electronAPI
		.trackTime(page, timeSpent, sessionId)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}
