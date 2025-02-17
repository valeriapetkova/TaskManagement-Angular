import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksDetailsComponent } from "./tasks-details/tasks-details.component";
import { MyTasksComponent } from "./my-tasks/my-tasks.component";



const routes: Routes = [
    { path: 'teams/:teamId/:taskId', component: TasksDetailsComponent},
    { path: 'my-tasks', component: MyTasksComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class TasksRoutingModule {}