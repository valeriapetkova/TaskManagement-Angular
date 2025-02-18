import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";
import { Router } from "@angular/router";
import { matchPasswordsValidator } from "../../shared/utils/match-passwords-validator";
import { ErrorService } from "src/app/core/error/error.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
    form = this.fb.group({ 
        username: ['', [Validators.required, Validators.minLength(3)]], 
        email: ['', [Validators.required, Validators.email]], 
        passGroup: this.fb.group(
            {
                password: ['', [Validators.required, Validators.minLength(5)]],
                repeatPassword: ['', [Validators.required]],
            },
            {
                validators: [matchPasswordsValidator('password', 'repeatPassword')],
            }
        ),
    });

    get passGroup() {
        return this.form.get('passGroup');
    }

    constructor(private fb: FormBuilder, private userService: UserService, private errorService: ErrorService, private router: Router) {}

    get hasErrorMsg(): boolean {
        return this.errorService.hasError;
    }

    register(): void {
        if(this.form.invalid) {
            return;
        }

        const {
            username, 
            email, 
            passGroup: { password } = {},
        } = this.form.value;

        this.userService
            .register(username!, email!, password!)
            .subscribe(() => {
                this.router.navigate(['/teams']);
            });
    }
}