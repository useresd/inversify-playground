"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = start;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const pino_http_1 = __importDefault(require("pino-http"));
const authenticaiton_1 = require("./middleware/authenticaiton");
const dependencyInjectionMiddleware_1 = require("./middleware/dependencyInjectionMiddleware");
const app = (0, express_1.default)();
function start(routers) {
    app.use(authenticaiton_1.authenticateMiddleware);
    app.use((0, pino_http_1.default)());
    app.use(dependencyInjectionMiddleware_1.dependencyInjectionMiddleware);
    for (const router of routers) {
        app.use(router);
    }
    const server = http_1.default.createServer(app);
    server.listen(3000, () => console.log("working!!!!"));
}
