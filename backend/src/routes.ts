import { Router } from "express";
import ClassesControllers from "./controllers/ClassesControllers";
import ConnectionsControllers from "./controllers/ConnectionsControllers";
import db from "./database/connection";
const routes = Router()

const classesControllers = new ClassesControllers()
const connectionsControllers = new ConnectionsControllers()

routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)
routes.get('/classes', classesControllers.index)
routes.get('/connections', connectionsControllers.index)
routes.post('/connections', connectionsControllers.create)
routes.get('/', async (req, res) => {
  const user = await db('users').select('*')
  const classes = await db('classes').select('*')
  const classSchedule = await db('class_schedule').select('*')
  res.json({
    user,
    classes,
    classSchedule
  })
})

export default routes;
