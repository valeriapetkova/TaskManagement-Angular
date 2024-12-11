import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CreateTeamComponent } from "./create-team/create-team.component";
import { TeamsDetailsComponent } from "./teams-details/teams-details.component";
import { TeamsListComponent } from "./teams-list/teams-list.component";


const routes: Routes = [
    { path: 'teams', component: TeamsListComponent },
    { path: 'teams/:teamId', component: TeamsDetailsComponent },
    { path: 'teams/:teamId/joined', component: TeamsDetailsComponent },
    { path: 'teams/:teamId/tasks', component: TeamsDetailsComponent },
    {
        path: 'create',
        component: CreateTeamComponent
        //canActivate
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class TeamsRoutingModule {}