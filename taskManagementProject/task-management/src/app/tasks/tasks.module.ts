import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TasksDetailsComponent } from "./tasks-details/tasks-details.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TasksRoutingModule } from "./tasks-routing.module";

@NgModule({
    declarations: [TasksListComponent, CreateTaskComponent, TasksDetailsComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, SharedModule, TasksRoutingModule],
    exports: [TasksListComponent],
})

export class TasksModule {}