
import { Comment } from "./comment";
export interface Post{
    id?:string;
    username?: string;
    postType?: number;
    title?: string;
    content?:string;
    postDate?: Date;
    groupId?: number;
    agreeCount?: number;
    disagreeCount?: number;
    comments?:Comment[];
  }
  
