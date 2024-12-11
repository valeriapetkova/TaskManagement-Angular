import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { CreateTaskComponent } from "./create-task/create-task.component";

@NgModule({
    declarations: [TasksListComponent, CreateTaskComponent],
    imports: [CommonModule, FormsModule],
    exports: [TasksListComponent],
})

export class TasksModule {}