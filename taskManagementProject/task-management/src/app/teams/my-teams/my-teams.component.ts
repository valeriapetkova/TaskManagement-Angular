import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Team } from "src/app/types/team";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-my-teams',
    templateUrl: './my-teams.component.html',
    styleUrls: ['./my-teams.component.css'],
})

export class MyTeamsComponent implements OnInit {

    teams: Team[] | null = [];

    constructor(private api: ApiService, private userService: UserService) {}
    
    ngOnInit(): void {
        const userId = this.userService.user?._id || '';
        this.api.getMyTeams(userId).subscribe((teams) => {
            this.teams = teams;
        })
    }
}