import { Component, Input, OnInit } from "@angular/core";
import { Task } from "src/app/types/task";
import { UserService } from "src/app/user/user.service";
import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-my-tasks',
    templateUrl: './my-tasks.component.html',
    styleUrls: ['./my-tasks.component.css'],
})

export class MyTasksComponent implements OnInit {
    tasks: Task[] | null = [];

    constructor(private tasksService: TasksService, private userService: UserService) {}
    
    ngOnInit(): void {
        const userId = this.userService.user?._id || '';
        this.tasksService.getMyTasks(userId).subscribe((tasks) => {
            this.tasks = tasks;
        })
    }
}