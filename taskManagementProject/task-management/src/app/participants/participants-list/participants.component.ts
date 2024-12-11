import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Participant } from "src/app/types/participant";
import { ParticipantsService } from "../participants.service";

@Component({
    selector: 'app-participants',
    templateUrl: './participants.component.html',
    styleUrls: ['./participants.component.css'],
})

export class ParticipantsComponent implements OnInit {
    participants: Participant[] | null = [];
    teamId: string = '';
    @Input() ownerId: string = '';

    
    constructor(private participantsService: ParticipantsService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}
    
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.teamId = data['teamId'];
            
            this.participantsService.getAll(this.teamId).subscribe((participants) => {
                this.participants = participants;
            });
            
            const userId = this.userService.user?._id;
            
            this.participantsService.getJoinedParticipant(this.teamId, userId).subscribe({
                next: () => {
                    this.router.navigate([`/teams/${this.teamId}`]);
                },
                error: () => {
                    this.router.navigate(['/error']);
                },
            });
        }); 
    }
    
    hasOwner() {
        const isOwnerUser = this.ownerId === this.userService.user?._id;
        return isOwnerUser;
    }
    
    get joined(): boolean {
        if (this.participantsService.hasParticipant === 0) {
            return false;
        } else {
            return true;
        }
    }
        
    join() {
        this.participantsService.create(this.teamId, this.userService.user?.email).subscribe({
            next: () => {
                this.router.navigate([`/teams/${this.teamId}/joined`]);
            },
            error: () => {
                this.router.navigate(['/error']);
            },
        })
    }
}