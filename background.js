// 创建一个简单的文字通知：
function notificationFn(){
	var notification = webkitNotifications.createNotification(
	'icon.png',  // icon url - can be relative
	'Hello!',  // notification title
	'这里是我写的提示信息...'  // notification body text
	);
	notification.show();
	
}
// 显示通知
//notification.show();


//chrome.browserAction.setBadgeText("1")




//tab更新时执行
function InsertFunc(tabId,changeInfo,tab){
	chrome.tabs.executeScript(tabId,{code: "console.log('看看这是那个页面弹出的！');"});
	chrome.tabs.insertCSS({file: ""});
}
chrome.tabs.onUpdated.addListener(InsertFunc);


// browser-action点击事件（没有popup时才能生效）
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({code: 'document.body.style.backgroundColor="red"'});
	//chrome.tabs.insertCSS({file: ""});
});
