export interface Comment {
    _ownerId: string;
    text: string;
    email: string;
    taskId: string;
    _createdOn: number;
    _id: string;
}

export interface CommentChanges {
    text: string;
    email: string;
    taskId: string;
    _id: string;
}