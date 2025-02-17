import { Component, Input, OnInit } from "@angular/core";
import { Comment } from "../../types/comment";
import { ApiService } from "../../api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { ParticipantsService } from "src/app/participants/participants.service";
import { CommentsService } from "../comments.service";

@Component({
    selector: 'app-comments-details',
    templateUrl: './comments-details.component.html',
    styleUrls: ['./comments-details.component.css'],
})

export class CommentsDetailsComponent {
    @Input() commentInfo: Comment = {
        _ownerId: '',
        text: '',
        email: '',
        taskId: '',
        _createdOn: 0,
        _id: '',
    }

    @Input() teamId: string = '';

    showEditMode: boolean = false;
    showDeleteModal: boolean = false;

    constructor(private commentsService: CommentsService, private activeRoute: ActivatedRoute, private userService: UserService, private participantsService: ParticipantsService, private router: Router) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    onToggle(): void {
        this.showEditMode = !this.showEditMode;
    }

    onDeleteToggle(): void {
        this.showDeleteModal = !this.showDeleteModal;
    }

    isOwner(ownerId: string) {
        const isOwnerUser = ownerId === this.userService.user?._id;
        return isOwnerUser;
    }

    onConfirm(action: string): void {
        if (action === 'delete') {
                this.commentsService.removeComment(this.commentInfo._id).subscribe({
                    next: () => {
                        this.router.navigate([`/${this.commentInfo.taskId}/comments`]);
                    },
                    error: () => {
                        this.router.navigate(['/error']);
                    },
                });
        
                this.commentsService.getComments(this.commentInfo.taskId).subscribe(() => {
                    this.router.navigate([`teams/${this.teamId}/${this.commentInfo.taskId}`]);
            });
        } else if (action === 'cancel') {
            this.onDeleteToggle();
        }
    }
}