import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksDetailsComponent } from "./tasks-details/tasks-details.component";



const routes: Routes = [
    { path: 'teams/:teamId/:taskId', component: TasksDetailsComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class TasksRoutingModule {}