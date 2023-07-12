import { User } from "./user";

export interface Group {
    id : number;
    name: String;
    description: String;
    users: User[];

    
}
