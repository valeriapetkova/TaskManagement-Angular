import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { TasksService } from "../tasks.service";
import { UserService } from "src/app/user/user.service";

@Component({
    selector: 'app-create-task',
    templateUrl: './create-task.component.html',
    styleUrls: ['./create-task.component.css'],
})

export class CreateTaskComponent {
    @Input() teamId: string = '';
    
    constructor(private tasksService: TasksService, private userService: UserService, private router: Router) {}

    addTask(form: NgForm) {
        if (form.invalid) {
            return;
        }

        const { taskName, startDate, endDate,  progress, description } = form.value;
        const email = this.userService.user?.email || '';
        
            
        this.tasksService.createTask(this.teamId, taskName, startDate, endDate, progress, description, email).subscribe(() => {
            this.router.navigate([`/teams/${this.teamId}/tasks`]);
        });
    }
}