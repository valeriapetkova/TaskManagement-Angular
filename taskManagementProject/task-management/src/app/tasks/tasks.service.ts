import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task } from "../types/task";


@Injectable({
    providedIn: 'root',
})

export class TasksService {

    constructor(private http: HttpClient) {}

    getTasks(teamId: string) {
        const query = new URLSearchParams({
            where: `teamId="${teamId}"`,
            load: `owner=_ownerId:users`,
        });

        return this.http.get<Task[]>(`/api/data/tasks?${query}`);
    }

    getTask(taskId: string) {
        return this.http.get<Task>(`/api/data/tasks/${taskId}`);
    }

    createTask(teamId: string, taskName: string, startDate: string, endDate: string, progress: string, description: string, email: string) {
        return this.http.post<Task>(`/api/data/tasks`, { teamId, taskName, startDate, endDate, progress, description, email });
    }

    removeTask(taskId: string) {
        return this.http.delete<Task>(`/api/data/tasks/${taskId}`);
    }
}