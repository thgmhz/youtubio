const getVideoId = url =>
  url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1]

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.popupIsOpen) {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs) => {
      const youtubeId = getVideoId(tabs[0].url)
      chrome.runtime.sendMessage({ youtubeId })
    })
  }
})
