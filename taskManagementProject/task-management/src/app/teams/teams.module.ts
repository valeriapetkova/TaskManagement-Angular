import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeamsListComponent } from "./teams-list/teams-list.component";
import { TeamsRoutingModule } from "./teams-routing.module";
import { LastTeamsComponent } from "./last-teams/last-teams.component";
import { CreateTeamComponent } from "./create-team/create-team.component";
import { MyTeamsComponent } from "./my-teams/my-teams.component";
import { TeamsDetailsComponent } from "./teams-details/teams-details.component";
import { TeamEditComponent } from "./team-edit/team-edit.component";
import { ParticipantsModule } from "../participants/participants.module";
import { TasksModule } from "../tasks/tasks.module";

@NgModule({
    declarations: [
        TeamsListComponent, 
        TeamsDetailsComponent,
        CreateTeamComponent,
        TeamEditComponent,
        LastTeamsComponent,
        MyTeamsComponent,
    ],
    imports: [CommonModule, TeamsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule, ParticipantsModule, TasksModule],
})

export class TeamsModule {}