export interface Comment {
  id?: string;
  userId?: number;
  commenter?: string;
  content?: string;
  createdDate?: Date;
  updatedDate?: Date;
  parentCommentID?: string;
  postId?: string;
  showReply?: boolean; 
  replyText?: string; 
  showChildComments?: boolean;
}
