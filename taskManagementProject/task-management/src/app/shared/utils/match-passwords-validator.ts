import { ValidatorFn } from "@angular/forms";

export function matchPasswordsValidator (
    passwordControlName: string,
    repeatPasswordControlName: string
): ValidatorFn {
    return (control) => {
        const passwordFormControl = control.get(passwordControlName);
        const repeatPasswordFormControl = control.get(repeatPasswordControlName);
        const passwordsAreMatching = passwordFormControl?.value === repeatPasswordFormControl?.value;

        return passwordsAreMatching ? null : { matchPasswordsValidator: true };
    };
}