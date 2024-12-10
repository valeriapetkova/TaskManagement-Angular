import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Subscription, tap } from "rxjs";
import { UserForAuth } from "../types/user";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class UserService implements OnDestroy {
    private user$$ = new BehaviorSubject<UserForAuth | null>(null);
    private user$ = this.user$$.asObservable();

    user: UserForAuth | null = null;
    userSubscription: Subscription | null = null;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
            this.user = user;
        });
    }

    login(email: string, password: string) {
        return this.http 
            .post<UserForAuth>('/api/users/login', { email, password })
            .pipe(tap((user) => localStorage.setItem('auth', user.accessToken)))
            .pipe(tap((user) => this.user$$.next(user)));
    }

    register(username: string, email: string, password: string) {
        return this.http 
            .post<UserForAuth>('/api/users/register', { username, email, password })
            .pipe(tap((user) => localStorage.setItem('auth', user.accessToken)))
            .pipe(tap((user) => this.user$$.next(user)));
    }

    logout() {
        return this.http 
            .get('/api/users/logout')
            .pipe(tap(() => localStorage.removeItem('auth')))
            .pipe(tap(() => this.user$$.next(null)));
    }

    getProfile() {
        return this.http 
            .get<UserForAuth>('/api/users/me')
            .pipe(tap((user) => this.user$$.next(user)));
    }

    ngOnDestroy(): void {
        this.userSubscription?.unsubscribe();
    }
}