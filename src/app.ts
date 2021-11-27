import compression from "compression";
import express, { Express } from "express";
import helmet from "helmet";

// Controllers
import { healthController } from "@/system/health.controller";
import { welcomeController } from "@/system/welcome.controller";

const app: Express = express();

app.set("port", process.env["PORT"] || 8080);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());

app.get("/", welcomeController);
app.get("/health", healthController);

export { app };
