const KeyName = 'toggleAppKey'
const DefaultKey = 'z'
const arr = []
let tid = 0
const getKey = key => {
	return new Promise(resolve => {
		chrome.storage.local.get([key], data => {
			resolve(data[key]);
		});
	})
}

document.addEventListener('DOMContentLoaded', function () {
	document.body.addEventListener('keyup', async e => {
		if (e.target !== e.currentTarget) return;

		const key = await getKey(KeyName) || DefaultKey;
		if (e.key === key) arr.push(key)
		else return

		if (arr.length === 2) {
			arr.length = 0
			chrome.extension.sendMessage({ type: 'activateApp' }, () => { });

			// const script = document.createElement('script');
			// script.onload = () => script.remove();
			// script.src = chrome.extension.getURL('content.js');
			// document.body.appendChild(script);
		}

		clearTimeout(tid);
		tid = setTimeout(() => {
			arr.length = 0
		}, 1000);
	})
});


