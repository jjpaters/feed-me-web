import { FormControl, Validators } from '@angular/forms';

export class EmailFormControl {
    static getControl(value: string, disabled: boolean): FormControl {
        return new FormControl({ value: value, disabled: disabled }, [
            Validators.email,
            Validators.required
        ]);
    }
}
