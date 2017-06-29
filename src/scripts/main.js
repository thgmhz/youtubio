const serverUrl = 'http://youtubio-server.herokuapp.com'

const errors = {
  needToGetVideo: 'Error: You need to get some video on Youtube.'
}

const getVideoId = url =>
  url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)

const getCurrentTab = () =>
  new Promise((resolve) => {
    chrome.tabs.query({
      'active': true,
      'lastFocusedWindow': true
    }, (tabs) => resolve(tabs))
  })

async function iconClick () {
  const tabs = await getCurrentTab()

  if (!tabs) {
    alert('1 ' + errors.needToGetVideo)
    return
  }

  const youtubeId = getVideoId(tabs[0].url)
  if (!youtubeId) {
    alert('2 ' + errors.needToGetVideo)
    return
  }

  const body = document.getElementsByTagName('body')[0]
  const link = document.createElement('a')
  link.id = 'youtubio-link'
  link.download = 'mp3'
  link.href = `${serverUrl}/convert/${youtubeId[1]}`
  body.appendChild(link)

  const youtubioLink = document.getElementById('youtubio-link')
  youtubioLink.click()
}

chrome.browserAction.onClicked.addListener(iconClick)
