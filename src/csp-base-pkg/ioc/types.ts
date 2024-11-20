import { Container } from "inversify";
import { UserInfo } from "../types/UserInfo";

const TYPES = {
    UserInfo: Symbol.for("UserInfo"),
    Logger: Symbol.for("Logger")
};

declare global {
    namespace Express {
        interface Request {
            user: UserInfo,
            container: Container
        }
    }
}


export { TYPES };