import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-create-team',
    templateUrl: './create-team.component.html',
    styleUrls: ['./create-team.component.css'],
})

export class CreateTeamComponent {
    constructor(private apiService: ApiService, private router: Router, private userService: UserService) {}

    owner = this.userService.user?.username || '';

    addTeam(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { title, description, teamKey } = form.value;
        this.apiService.createTeam(title, this.owner, description, teamKey).subscribe(() => {
            this.router.navigate(['/teams']);
        });
    }
}