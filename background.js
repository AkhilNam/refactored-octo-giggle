function checkForValidUrl(tabId, changeInfo, tab) {
  console.log("Show 2048 game");
  chrome.pageAction.show(tabId);
};

window.onload = () => {
	chrome.tabs.query({ active: true }, (tabs) => tabs.map((tab) => chrome.pageAction.show(tab.id)))
	chrome.tabs.onUpdated.addListener(checkForValidUrl);
}