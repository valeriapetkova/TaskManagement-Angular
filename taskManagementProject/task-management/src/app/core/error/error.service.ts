import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class ErrorService {
    private apiError$$ = new BehaviorSubject(null);
    public apiError$ = this.apiError$$.asObservable();

    error: string | null = null;

    constructor() {
        this.apiError$.subscribe((error) => {
            this.error = error;
        });     
    }

    get hasError(): boolean {
        return !!this.error;
    }

    setError(error: any): void {
        this.apiError$$.next(error);
    }

    removeError(): void {
        this.apiError$$.next(null);
    }
}