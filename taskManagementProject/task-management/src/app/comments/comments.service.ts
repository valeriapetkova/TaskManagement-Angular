import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comment, CommentChanges } from "../types/comment";


@Injectable({
    providedIn: 'root',
})

export class CommentsService {

    constructor(private http: HttpClient) {}

    getComments(taskId: string) {
        const query = new URLSearchParams({
            where: `taskId="${taskId}"`,
            load: `owner=_ownerId:users`,
        });

        return this.http.get<Comment[]>(`/api/data/comments?${query}`);
    }

    createComment(taskId: string, text: string, email: string) {
        return this.http.post<Comment>(`/api/data/comments`, { taskId, text, email });
    }

    updateComment(commentId: string, taskId: string, text: string, email: string ) {
        return this.http.put<CommentChanges>(`/api/data/comments/${commentId}`, { taskId, text, email });
    }

    removeComment(commentId: string) {
        return this.http.delete<Comment>(`/api/data/comments/${commentId}`);
    }
}