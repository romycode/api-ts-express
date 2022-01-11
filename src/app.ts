import express, { Express } from 'express'
import { PrismaClient } from '@prisma/client'
import compression from 'compression'
import helmet from 'helmet'

// Controllers
import { healthController } from '@/system/health.controller'
import { welcomeController } from '@/system/welcome.controller'

const prisma = new PrismaClient()
const app: Express = express()

app.set('port', process.env['PORT'] || 8080)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())

app.get('/', welcomeController.handle)
app.get('/health', healthController.handle)

export { app, prisma }