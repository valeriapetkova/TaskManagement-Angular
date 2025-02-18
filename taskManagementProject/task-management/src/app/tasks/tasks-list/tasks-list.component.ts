import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user/user.service";
import { Task } from "src/app/types/task";
import { ActivatedRoute, Router } from "@angular/router";
import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css'],
})

export class TasksListComponent implements OnInit {
    tasks: Task[] | null = [];
    teamId: string = '';
    showCreateMode: boolean = false;
    
    constructor(private tasksService: TasksService, private activeRoute: ActivatedRoute, private userService: UserService, private router: Router) {}
    
    ngOnInit(): void {
        this.activeRoute.params.subscribe((data) => {
            this.teamId = data['teamId'];

            this.tasksService.getTasks(this.teamId).subscribe((tasks) => {
                this.tasks = tasks;
            });
        });
    }

    getFilteredTasks(progress: string): void {
        this.tasksService.getTasksByProgress(progress).subscribe((tasks) => {
            this.tasks = tasks;
        });
    }

    get teamID(): string {
        return this.teamId || '';
    }

    onCreate(): void {
        this.showCreateMode = !this.showCreateMode;
    }

    isOwner(ownerId: string) {
        const isOwnerUser = ownerId === this.userService.user?._id;
        return isOwnerUser;
    }
}