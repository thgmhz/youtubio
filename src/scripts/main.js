const getVideoId = url =>
  url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1]

const download = tab => {
  const id = getVideoId(tab.url)
}

chrome.browserAction.onClicked.addListener(download)
