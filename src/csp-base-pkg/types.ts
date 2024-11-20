import { Container } from "inversify";
import { UserInfo } from "./types/UserInfo";

declare global {
    namespace Express {
        interface Request {
            container: Container;
            user: UserInfo
        }
    }
}
