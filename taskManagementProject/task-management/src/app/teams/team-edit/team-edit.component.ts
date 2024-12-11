import { Component, Input, OnInit } from "@angular/core";
import { TeamChanges } from "../../types/team";
import { FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-team-edit',
    templateUrl: './team-edit.component.html',
    styleUrls: ['./team-edit.component.css'],
})

export class TeamEditComponent implements OnInit {
    @Input() teamInfo: TeamChanges = {
        title: '',
        owner: '',
        description: '',
    };

    teamEdit: TeamChanges = {
        title: '',
        owner: '',
        description: '',
    };

    
    form = this.fb.group({
        title: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
    })
    
    constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private api: ApiService, private userService: UserService, private router: Router) {}
    
    owner = this.userService.user?.username || '';

    ngOnInit(): void {
        const { title, description } = this.teamInfo;
        this.teamEdit = {
            title,
            owner: this.owner,
            description,
        };

        this.form.setValue({
            title,
            description,
        });
    }

    saveTeamChangesHandler(): void {
        if (this.form.invalid) {
            return;
        }

        this.teamEdit = this.form.value as TeamChanges;
        const { title, description } = this.teamEdit;

        this.activeRoute.params.subscribe((data) => {
            const teamId = data['teamId'];

            this.api.updateTeam(teamId, title, this.owner, description).subscribe(() => {
                this.router.navigate(["/teams"]);
            });
    });

    }
}