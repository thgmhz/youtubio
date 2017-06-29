import {
  getVideoInfo,
  setFileName,
  createAudioFile
} from '../helpers/stream'

export default (req, res) => {
  const id = req.params.youtubeId
  const url = `https://www.youtube.com/watch?v=${id}`

  function sendResponse (file) {
    res.download(file)
  }

  getVideoInfo(id)
    .then(setFileName)
    .then(filename => createAudioFile(url, filename))
    .then(sendResponse)
    .catch(console.log)
}
