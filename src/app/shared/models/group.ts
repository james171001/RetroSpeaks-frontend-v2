import { Category } from "./category";
import { User } from "./user";

export interface Group {
    id : number;
    name: String;
    description: String;
    category:Category;
    users: User[];   
    followed: boolean; 
}
