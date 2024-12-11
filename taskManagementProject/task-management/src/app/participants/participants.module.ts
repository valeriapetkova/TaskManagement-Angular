import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ParticipantsComponent } from "./participants-list/participants.component";

@NgModule({
    declarations: [ParticipantsComponent],
    imports: [CommonModule],
    exports: [ParticipantsComponent],
})

export class ParticipantsModule {}