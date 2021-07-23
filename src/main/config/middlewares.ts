import { Express } from 'express'
import * as mid from '../middlewares'

export default (app: Express): void => {
  app.use(mid.bodyParser)
  app.use(mid.cors)
}
