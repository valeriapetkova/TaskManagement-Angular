import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";
import { Comment } from "src/app/types/comment";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentsService } from "../comments.service";

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css'],
})

export class CommentsListComponent implements OnInit {
    comments: Comment[] | null = [];
    taskId: string = '';
    showEditMode: boolean = false;
    showCreateMode: boolean = false;
    @Input() teamId: string = '';
    
    constructor(private commentsService: CommentsService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}
    
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.taskId = data['taskId'];

            this.commentsService.getComments(this.taskId).subscribe((comments) => {
                this.comments = comments;
            });
        });
    }

    get taskID(): string {
        return this.taskId || '';
    }

    onCreate(): void {
        this.showCreateMode = !this.showCreateMode;
    }

    onToggle(): void {
        this.showEditMode = !this.showEditMode;
    }

    isOwner(ownerId: string) {
        const isOwnerUser = ownerId === this.userService.user?._id;
        return isOwnerUser;
    }

    delete(commentId: string) { 
        this.commentsService.removeComment(commentId).subscribe({
            next: () => {
                this.router.navigate([`/${this.taskId}/comments`]);
            },
            error: () => {
                this.router.navigate(['/error']);
            },
        });

        this.commentsService.getComments(this.taskId).subscribe(() => {
            this.router.navigate([`teams/${this.teamId}/${this.taskId}`]);
    });
    }
}