import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Participant } from "../types/participant";
import { tap } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class ParticipantsService {

    constructor(private http: HttpClient) {}

    hasParticipant: number | undefined;

    get isJoined(): boolean {
        return !!this.hasParticipant;
    }

    getJoinedParticipant (teamId: string, userId: string | undefined) {
        const query = `where=${encodeURIComponent(`teamId="${teamId}"`)}%20and%20${encodeURIComponent(`_ownerId="${userId}"`)}&count`;
        return this.http.get<number>(`/api/data/participants?${query}`) 
                .pipe(tap((p) => this.hasParticipant = p))
    }
    
    getAll (teamId: string) {
        const query = new URLSearchParams({
            where: `teamId="${teamId}"`,
            load: `owner=_ownerId:users`,
        });

        return this.http.get<Participant[]>(`/api/data/participants?${query}`)
    }

    create(teamId: string, email: string | undefined) {
        return this.http.post<Participant>(`/api/data/participants`, { teamId, email })
    }
}