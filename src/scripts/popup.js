const youtubio = {
  serverUrl: 'http://youtubio-server.herokuapp.com',

  init: function () {
    chrome.runtime.sendMessage({ popupIsOpen: true })
    this.cacheSelectors()
    this.bindEvents()
  },
  cacheSelectors: function () {
    this.body = document.getElementsByTagName('body')[0]
    this.link = document.createElement('a')
    this.link.id = 'youtubio-link'
    this.link.download = 'mp3'
  },
  bindEvents: function () {
    chrome.runtime.onMessage.addListener(this.Events.onMessage)
  },
  Events: {
    onMessage: function (message, sender, sendResponse) {
      const self = youtubio
      if (message.youtubeId) {
        self.link.href = `${self.serverUrl}/convert/${message.youtubeId}`
        self.body.appendChild(self.link)
        setTimeout(() => {
          const youtubioLink = document.getElementById('youtubio-link')
          youtubioLink.click()
        }, 500)
      }
    }
  }
}

youtubio.init()
