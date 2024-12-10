import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "./user-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, UserRoutingModule, RouterModule, SharedModule, FormsModule, ReactiveFormsModule],
})

export class UserModule {}
