import { injectable } from "inversify";
import { License } from "./license.interface";

@injectable()
export class BasicLicense implements License {

    usersCount(): number {
        return 10;
    }

    extractionAllowed(): boolean {
        return false;
    }

}