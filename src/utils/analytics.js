export function trackPageTime(page, timeSpent) {
	window.electronAPI
		.trackTime(page, timeSpent)
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
}
