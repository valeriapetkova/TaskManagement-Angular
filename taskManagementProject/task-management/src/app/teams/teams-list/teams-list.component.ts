import { Component, OnInit } from "@angular/core";
import { Team } from "../../types/team";
import { ApiService } from "../../api.service";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.css'],
})

export class TeamsListComponent implements OnInit {
    teams: Team[] | null = [];

    constructor(private api: ApiService, private userService: UserService) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    ngOnInit(): void {
        this.api.getTeams().subscribe((teams) => {
            this.teams = teams;
        })
    }
}