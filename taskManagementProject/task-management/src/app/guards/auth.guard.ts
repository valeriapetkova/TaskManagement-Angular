import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const userService = inject(UserService);
    const router = inject(Router);
    
    const hasToken = userService.user?.accessToken;
    const isLogged = localStorage.getItem('auth');

    if (isLogged || hasToken) {
        router.navigate(['/home']);
        return false;   
    } 

    return true; 
}