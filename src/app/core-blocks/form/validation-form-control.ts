import { FormGroup, AbstractControl } from '@angular/forms';

export class ValidationFormControl {
    static showErrors(control: AbstractControl, submitted: boolean): boolean {
        return control.invalid && (control.dirty || control.touched || submitted);
    }
}
