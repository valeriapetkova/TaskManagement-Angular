import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CreateTeamComponent } from "./create-team/create-team.component";
import { TeamsListComponent } from "./teams-list/teams-list.component";


const routes: Routes = [
    { path: 'teams', component: TeamsListComponent },
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