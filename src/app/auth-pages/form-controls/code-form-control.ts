import { FormControl, Validators } from '@angular/forms';

export class CodeFormControl {
    static getControl(value: string, disabled: boolean): FormControl {
        return new FormControl({ value: value, disabled: disabled }, [
            Validators.required,
            Validators.minLength(6)
        ]);
    }
}
