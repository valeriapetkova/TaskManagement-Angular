import { Component, OnInit } from "@angular/core";
import { Team } from "../../types/team";
import { ApiService } from "../../api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { ParticipantsService } from "src/app/participants/participants.service";

@Component({
    selector: 'app-teams-details',
    templateUrl: './teams-details.component.html',
    styleUrls: ['./teams-details.component.css'],
})

export class TeamsDetailsComponent implements OnInit {
    team = {} as Team;
    showEditMode: boolean = false;

    constructor(private api: ApiService, private activeRoute: ActivatedRoute, private userService: UserService, private participantsService: ParticipantsService, private router: Router) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    get hasJoinedParticipant(): boolean {
        return this.participantsService.isJoined;
    }

    get userId(): string {
        return this.userService.user?._id || '';
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            const id = data['teamId'];

            this.api.getTeam(id).subscribe((team) => {
                this.team = team;
            });
        });
    }

    onToggle(): void {
        this.showEditMode = !this.showEditMode;
    }

    isOwner(team: Team) {
        const isOwnerUser = this.team._ownerId === this.userService.user?._id;
        return isOwnerUser;
    }

    delete() {
        this.api.deleteTeam(this.team._id).subscribe({
            next: () => {
                this.router.navigate(['/teams']);
            },
            error: () => {
                this.router.navigate(['/error']);
            },
        });
    }
}