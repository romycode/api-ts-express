import compression from "compression"
import express, { Express } from "express"
import helmet from "helmet"
// Controller
import { healthController } from "@/system/health.controller"

const app: Express = express()

app.set("port", process.env["PORT"] || 3000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())

app.get("/health", healthController)

export { app }