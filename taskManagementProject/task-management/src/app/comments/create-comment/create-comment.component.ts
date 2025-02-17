import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { CommentsService } from "../comments.service";

@Component({
    selector: 'app-create-comment',
    templateUrl: './create-comment.component.html',
    styleUrls: ['./create-comment.component.css'],
})

export class CreateCommentComponent {
    @Input() taskId: string = '';
    @Input() teamId: string = '';
    
    constructor(private commentsService: CommentsService, private userService: UserService, private router: Router) {}

    addComment(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { text } = form.value;
        const email = this.userService.user?.email || '';
        
            
        this.commentsService.createComment(this.taskId, text, email).subscribe(() => {
            this.router.navigate([`/${this.taskId}/comments-create`]);
        });

        this.commentsService.getComments(this.taskId).subscribe(() => {
                this.router.navigate([`teams/${this.teamId}/${this.taskId}`]);
        });

    }
}