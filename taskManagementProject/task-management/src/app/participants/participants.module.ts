import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParticipantsComponent } from "./participants-list/participants.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ParticipantsComponent],
    imports: [CommonModule, FormsModule],
    exports: [ParticipantsComponent],
})

export class ParticipantsModule {}