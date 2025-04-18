// background.js

const config = {
    monitoredUrls: [
      "https://www.facebook.com",
      "https://facebook.com"
    ],
    closeAfterSeconds: 300 // 5 minutes
  };
  
  const tabTimers = new Map();
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      const matched = config.monitoredUrls.some(url => tab.url.includes(url));
      if (matched && !tabTimers.has(tabId)) {
        console.log(`Matched URL: ${tab.url} — scheduling close in ${config.closeAfterSeconds}s`);
        const timer = setTimeout(() => {
          chrome.tabs.remove(tabId, () => {
            console.log(`Closed tab ${tabId}`);
            tabTimers.delete(tabId);
          });
        }, config.closeAfterSeconds * 1000);
  
        tabTimers.set(tabId, timer);
      }
    }
  });
  
  chrome.tabs.onRemoved.addListener((tabId) => {
    if (tabTimers.has(tabId)) {
      clearTimeout(tabTimers.get(tabId));
      tabTimers.delete(tabId);
    }
  });
  
