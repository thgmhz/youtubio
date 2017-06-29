import fs from 'fs'
import path from 'path'
import ytdl from 'ytdl-core'

export const getVideoInfo = id =>
  new Promise((resolve, reject) => {
    ytdl.getInfo(id, (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
  })

export const setFileName = info =>
  Promise.resolve(path.join(__dirname, `../temp/${info.title}.mp3`))

export const createAudioFile = (url, filename) =>
  new Promise((resolve, reject) => {
    ytdl(`${url}`, {
      filter: 'audioonly',
      quality: 'highest',
      downloadURL: true
    })
    .pipe(fs.createWriteStream(filename))
    .on('finish', () => resolve(filename))
    .on('error', () => reject())
  })
