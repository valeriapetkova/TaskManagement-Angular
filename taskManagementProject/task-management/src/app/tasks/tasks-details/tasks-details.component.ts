import { Component, OnInit } from "@angular/core";
import { Task } from "../../types/task";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { ParticipantsService } from "src/app/participants/participants.service";
import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-tasks-details',
    templateUrl: './tasks-details.component.html',
    styleUrls: ['./tasks-details.component.css'],
})

export class TasksDetailsComponent implements OnInit {
    task = {} as Task;
    showEditMode: boolean = false;
    showDeleteModal: boolean = false;
    teamId: string = '';

    constructor(private tasksService: TasksService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}

    get isLoggedIn(): boolean {
        return this.userService.isLogged;
    }

    get userId(): string {
        return this.userService.user?._id || '';
    }

    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            const id = data['taskId'];
            this.teamId = data['teamId'];

            this.tasksService.getTask(id).subscribe((task) => {
                this.task = task;
            });
        });
    }

    onToggle(): void {
        this.showEditMode = !this.showEditMode;
    }

    onDeleteToggle(): void {
        this.showDeleteModal = !this.showDeleteModal;
    }

    isOwner() {
        const isOwnerUser = this.task._ownerId === this.userService.user?._id;
        return isOwnerUser;
    }

    onConfirm(action: string): void {
        if (action === 'delete') {
            this.tasksService.removeTask(this.task._id).subscribe( () => {
                    this.router.navigate([`/teams/${this.teamId}`]);
                },
            );
        } else if (action === 'cancel') {
            this.onDeleteToggle();
        }
    }
}