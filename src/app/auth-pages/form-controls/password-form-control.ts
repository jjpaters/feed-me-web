import { FormControl, Validators } from '@angular/forms';

export class PasswordFormControl {
    static getControl(value: string, disabled: boolean): FormControl {
        return new FormControl({ value: value, disabled: disabled }, [
            Validators.required,
            Validators.minLength(8)
        ]);
    }

    static getRequiredErrorMessage() {
        return `E-mail is required.`;
    }

    static getInvalidMessage() {
        return `Password is required:
        <ul>
            <li>At least 8 characters long</li>
            <li>At least one number</li>
            <li>At least one special character</li>
            <li>At least one uppercase letters</li>
            <li>At least one lowercase letters</li>
        </ul>`;
    }
}
