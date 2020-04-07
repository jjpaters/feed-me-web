import { FormControl, Validators } from '@angular/forms';

export class PasswordFormControl {
    static getControl(value: string, disabled: boolean): FormControl {
        return new FormControl({ value, disabled }, [
            Validators.required,
            Validators.minLength(8)
        ]);
    }
}
