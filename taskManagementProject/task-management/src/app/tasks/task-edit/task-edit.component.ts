import { Component, Input, OnInit } from "@angular/core";
import { TaskChanges } from "../../types/task";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/user/user.service";
import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-task-edit',
    templateUrl: './task-edit.component.html',
    styleUrls: ['./task-edit.component.css'],
})

export class TaskEditComponent implements OnInit {
    teamID: string = ''; 

    @Input() taskInfo: TaskChanges = {
        taskName: '',
        startDate: '',
        endDate: '',
        progress: '',
        description: '',
        email: '',
        teamId: '',
    };

    taskEdit: TaskChanges = {
        taskName: '',
        startDate: '',
        endDate: '',
        progress: '',
        description: '',
        email: '',
        teamId: '',
    };

    
    form = this.fb.group({
        taskName: ['', [Validators.required, Validators.minLength(3)]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        progress: ['', [Validators.required]],
        description: ['', [Validators.required, Validators.maxLength(60)]],
    })
    
    constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute, private tasksService: TasksService, private userService: UserService, private router: Router) {}
    
    email = this.userService.user?.email || '';

    ngOnInit(): void {
        const { taskName, startDate, endDate, progress, description, email, teamId } = this.taskInfo;
        this.taskEdit = {
            taskName,
            startDate,
            endDate,
            progress,
            description,
            email,
            teamId,
        };
        this.teamID = teamId;

        this.form.setValue({
            taskName,
            startDate,
            endDate,
            progress,
            description,
        });

    }

    saveTaskChangesHandler(): void {
        if (this.form.invalid) {
            return;
        }

        this.taskEdit = this.form.value as TaskChanges;
        const { taskName, startDate, endDate, progress, description } = this.taskEdit;

        this.activeRoute.params.subscribe((data) => {
            const taskId = data['taskId'];

            this.tasksService.updateTask(taskId, taskName, startDate, endDate, progress, description, this.email, this.teamID).subscribe(() => {
               this.router.navigate([`/teams/${this.teamID}`]);
            });
    });

    }
}