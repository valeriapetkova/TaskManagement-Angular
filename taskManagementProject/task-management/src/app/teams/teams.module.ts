import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeamsListComponent } from "./teams-list/teams-list.component";
import { TeamsRoutingModule } from "./teams-routing.module";

@NgModule({
    declarations: [
        TeamsListComponent, 
    ],
    imports: [CommonModule, TeamsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule],
})

export class TeamsModule {}