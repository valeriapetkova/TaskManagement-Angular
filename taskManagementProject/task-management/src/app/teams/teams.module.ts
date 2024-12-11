import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeamsListComponent } from "./teams-list/teams-list.component";
import { TeamsRoutingModule } from "./teams-routing.module";
import { LastTeamsComponent } from "./last-teams/last-teams.component";
import { CreateTeamComponent } from "./create-team/create-team.component";

@NgModule({
    declarations: [
        TeamsListComponent, 
        CreateTeamComponent,
        LastTeamsComponent,
    ],
    imports: [CommonModule, TeamsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})

export class TeamsModule {}