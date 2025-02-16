import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Task, TaskChanges } from "../types/task";


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

    updateTask(taskId: string, taskName: string, startDate: string, endDate: string, progress: string, description: string, email: string, teamId: string) {
        return this.http.put<TaskChanges>(`/api/data/tasks/${taskId}`, { taskName, startDate, endDate, progress, description, email, teamId });
    }

    removeTask(taskId: string) {
        return this.http.delete<Task>(`/api/data/tasks/${taskId}`);
    }

    getMyTasks(userId: string) {
        const query = `where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
        return this.http.get<Task[]>(`/api/data/tasks?${query}`);
    }

    getTasksByProgress(progress: string) {
        const query = `where=progress LIKE "${progress}"`;
        return this.http.get<Task[]>(`/api/data/tasks?${query}`);
    }
}