async function runApp() {
	async function getCurrentTab() {
		return new Promise(resolve => {

			chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
				resolve(tabs[0])
			});
		})
	}

	const tab = await getCurrentTab();
	
	chrome.scripting.executeScript({
		target: {tabId: tab.id},
		files: ['content.js']
	})
}

chrome.action.onClicked.addListener(runApp);

/* 监听快捷键 */
chrome.commands.onCommand.addListener((command) => {
	if (command == "toggle_status") {
		chrome.tabs.query({ active: true, currentWindow: true }, runApp);
	}
});

// chrome.extension.onMessage.addListener(function ({ type }, _, sendResponse) {
// 	if (type == 'activateApp') {
// 		console.log('activateApp');
// 		runApp() // 报错，需要权限
// 		sendResponse({ code: 1 })
// 	}
// 	// return true;
// });

// reload plugin
chrome.runtime.onMessage.addListener(request => {
	if (request.type === "reload") {
		chrome.runtime.reload()
	}
});