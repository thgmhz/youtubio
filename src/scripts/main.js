const fs = require('fs')
const ytdl = require('ytdl-core')

const options = {
  quality: 'highest',
  downloadURL: true,
  filter: 'audioonly'
}

const stream = ytdl('https://www.youtube.com/watch?v=CHekNnySAfM', options)

stream.on('info', (info, format) => {
  stream.pipe(fs.createWriteStream(`${info.title}.mp3`))
})
