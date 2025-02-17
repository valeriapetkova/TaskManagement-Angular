import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CreateCommentComponent } from "./create-comment/create-comment.component";
import { CommentsListComponent } from "./comments-list/comments-list.component";
import { CommentsDetailsComponent } from "./comments-details/comments-details.component";
import { CommentEditComponent } from "./comment-edit/comment-edit.component";

@NgModule({
    declarations: [CommentsListComponent, CreateCommentComponent, CommentsDetailsComponent, CommentEditComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
    exports: [CommentsListComponent],
})

export class CommentsModule {}