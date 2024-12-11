import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Team, TeamChanges } from "./types/team";


@Injectable({
    providedIn: 'root',
})

export class ApiService {

    constructor(private http: HttpClient) {}

    getTeams() {
        return this.http.get<Team[]>(`/api/data/teams`);
    }

    getTeam(teamId: string) {
        return this.http.get<Team>(`/api/data/teams/${teamId}`);
    }

    createTeam(title: string, owner: string, description: string, teamKey: string) {
        return this.http.post<Team>(`/api/data/teams`, { title, owner, description, teamKey });
    }

    updateTeam(teamId: string, title: string, owner: string, description: string) {
        return this.http.put<TeamChanges>(`/api/data/teams/${teamId}`, {  title, owner, description });
    }

    deleteTeam(teamId: string) {
        return this.http.delete<Team>(`/api/data/teams/${teamId}`);
    }

    getMyTeams(userId: string) {
        const query = `where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
        return this.http.get<Team[]>(`/api/data/teams?${query}`);
    }
}