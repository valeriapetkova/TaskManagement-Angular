import { Component } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ErrorService } from "src/app/core/error/error.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginComponent {
    constructor(private userService: UserService, private errorService: ErrorService, private router: Router) {}

    get hasErrorMsg(): boolean {
        return this.errorService.hasError;
    }

    login(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { email, password } = form.value;

        this.userService.login(email, password).subscribe(() => {
            this.router.navigate(['/teams']);
        })
    }
}