import { FormGroup, AbstractControl } from '@angular/forms';

export class ValidationFormControl {

    static email(form: FormGroup): AbstractControl {
        return form.get('email');
    }

    static password(form: FormGroup): AbstractControl {
        return form.get('password');
    }

    static showErrors(control: AbstractControl, submitted: boolean): boolean {
        return control.invalid && (control.dirty || control.touched || submitted);
    }
}
