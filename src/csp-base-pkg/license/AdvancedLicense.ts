import { injectable } from "inversify";
import { License } from "./license.interface";

@injectable()
export class AdvancedLicense implements License {

    usersCount(): number {
        return 100;
    }
    
    extractionAllowed(): boolean {
        return true;
    }
    
}