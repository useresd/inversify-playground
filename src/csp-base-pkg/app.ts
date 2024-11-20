import express from "express";
import http from "http";
import pinoHttpMiddleware from "pino-http";

import { authenticateMiddleware } from "./middleware/authenticaiton";
import { dependencyInjectionMiddleware } from "./middleware/dependencyInjectionMiddleware";

const app = express();

export function start(routers: express.Router[]) {
    
    app.use(authenticateMiddleware);
    app.use(pinoHttpMiddleware());
    
    app.use(dependencyInjectionMiddleware);
    
    for(const router of routers) {
        app.use(router);
    }

    const server = http.createServer(app);
    
    server.listen(3000, () => console.log("working!!!!"));
}
