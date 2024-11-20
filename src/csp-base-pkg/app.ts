import express from "express";
import http from "http";
import pinoHttpMiddleware from "pino-http";

import { authenticateMiddleware } from "./middleware/authenticaiton";
import { dependencyInjectionMiddleware } from "./middleware/dependencyInjectionMiddleware";

const app = express();

export function start(routers: express.Router[]) {
    
    app.use(express.json());
    app.use(authenticateMiddleware);
    app.use(pinoHttpMiddleware());
    
    app.use(dependencyInjectionMiddleware);
    
    for(const router of routers) {
        app.use(router);
    }

    const server = http.createServer(app);

    const PORT = 3000;
    
    server.listen(PORT, () => console.log(`server started listening on port ${PORT}`));
}
