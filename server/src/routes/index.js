import { convertController } from '../controllers'

export default app => {
  app.route('/convert/:youtubeId').get(convertController)
}
