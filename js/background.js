chrome.tabs.onActivated.addListener(function(tab) {
    console.log('Listener');
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log("Tab ID: " + tabs[0].id);
        chrome.tabs.executeScript(tabs[0].id, { file: "js/jquery-3.1.1.min.js" }, function() {
            chrome.tabs.executeScript(tabs[0].id, {
                code: '$("input[type=hidden]").length;'
            }, function(count) {
                console.log("Count: " + count);
                if(typeof count == 'undefined'){
                    chrome.browserAction.setBadgeText({text: "0"});
                }else{
                    chrome.browserAction.setBadgeText({text: count.toString()});
                }
            });
        });
    });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('Listener');
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log("Tab ID: " + tabs[0].id);
        chrome.tabs.executeScript(tabs[0].id, { file: "js/jquery-3.1.1.min.js" }, function() {
            chrome.tabs.executeScript(tabs[0].id, {
                code: '$("input[type=hidden]").length;'
            }, function(count) {
                console.log("Count: " + count);
                if(typeof count == 'undefined'){
                    chrome.browserAction.setBadgeText({text: "0"});
                }else{
                    chrome.browserAction.setBadgeText({text: count.toString()});
                }
            });
        });
    });
});

chrome.tabs.onCreated.addListener(function(tab) {
    console.log('Listener');
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log("Tab ID: " + tabs[0].id);
        chrome.tabs.executeScript(tabs[0].id, { file: "js/jquery-3.1.1.min.js" }, function() {
            chrome.tabs.executeScript(tabs[0].id, {
                code: '$("input[type=hidden]").length;'
            }, function(count) {
                console.log("Count: " + count);
                if(typeof count == 'undefined'){
                    chrome.browserAction.setBadgeText({text: "0"});
                }else{
                    chrome.browserAction.setBadgeText({text: count.toString()});
                }
            });
        });
    });
});
