import { Component, Input, OnInit } from "@angular/core";
import { CommentChanges } from "../../types/comment";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { CommentsService } from "../comments.service";

@Component({
    selector: 'app-comment-edit',
    templateUrl: './comment-edit.component.html',
    styleUrls: ['./comment-edit.component.css'],
})

export class CommentEditComponent implements OnInit {
    commentId: string = '';

    @Input() commentInfo: CommentChanges = {
        text: '',
        email: '',
        taskId: '',
        _id: '',
    };

    commentEdit: CommentChanges = {
        text: '',
        email: '',
        taskId: '',
        _id: '',
    };

    
    form = this.fb.group({
        text: ['', [Validators.required, Validators.maxLength(60)]],
    })
    
    constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private commentsService: CommentsService, private userService: UserService, private router: Router) {}
    
    email = this.userService.user?.email || '';

    ngOnInit(): void {
        const { text, email, taskId, _id } = this.commentInfo;
        this.commentEdit = {
            text,
            email,
            taskId,
            _id,
        };

        this.commentId = _id;

        this.form.setValue({
            text,
        });
    }

    saveCommentChangesHandler(): void {
        if (this.form.invalid) {
            return;
        }

        this.commentEdit = this.form.value as CommentChanges;
        const { text } = this.commentEdit;

        this.activeRoute.params.subscribe((data) => {
            const teamId = data['teamId'];
            const taskId = data['taskId'];

            this.commentsService.updateComment(this.commentId, taskId, text, this.email).subscribe(() => {
                this.router.navigate([`/${taskId}/comments`]);
            });

            this.commentsService.getComments(taskId).subscribe(() => {
                this.router.navigate([`teams/${teamId}/${taskId}`]);
            });
    });

    }
}