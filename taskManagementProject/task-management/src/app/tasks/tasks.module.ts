import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TasksDetailsComponent } from "./tasks-details/tasks-details.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TasksRoutingModule } from "./tasks-routing.module";
import { TaskEditComponent } from "./task-edit/task-edit.component";
import { MyTasksComponent } from "./my-tasks/my-tasks.component";
import { CommentsModule } from "../comments/comments.module";

@NgModule({
    declarations: [TasksListComponent, CreateTaskComponent, TasksDetailsComponent, TaskEditComponent, MyTasksComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule, TasksRoutingModule, CommentsModule],
    exports: [TasksListComponent],
})

export class TasksModule {}