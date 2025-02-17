import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CreateCommentComponent } from "./create-comment/create-comment.component";

@NgModule({
    declarations: [CreateCommentComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
    exports: [],
})

export class CommentsModule {}