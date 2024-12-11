import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Team } from "src/app/types/team";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-last-teams',
    templateUrl: './last-teams.component.html',
    styleUrls: ['./last-teams.component.css'],
})

export class LastTeamsComponent implements OnInit {
    lastTeams: Team[] | null = [];

    constructor(private api: ApiService, private userService: UserService) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    ngOnInit(): void {
        this.api.getLatest().subscribe((teams) => {
            this.lastTeams = teams;
        })
    }
}