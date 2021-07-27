import { createServer } from "http"
import { app } from "@/app"
import { createConnection } from "typeorm"

createConnection()
    .then(() => {
        createServer(app)
            .listen(app.get("port"))
            .on('error', () => console.error('ERROR: server error'))
            .on('listening', () => console.info('INFO: server listening on port 8080'))
    })
    .catch(err => console.error(err))