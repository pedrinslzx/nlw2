import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import routes from './routes'

const app = express()

app.disable('x-powered-by');
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => console.log('App started'))
