import { Component } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControlModalService } from './form-control-modal.service';

@Component({
  selector: 'app-form-control-modal',
  templateUrl: './form-control-modal.component.html',
  styleUrls: ['./form-control-modal.component.scss']
})
export class FormControlModalComponent {

  formValue: string;

  constructor(public modalService: FormControlModalService) {
    this.formValue = modalService.formControl?.value;
  }

  delete() {
    var namedFormArray = this.modalService.formGroup.get(this.modalService.name) as FormArray;
    const index = namedFormArray.controls.indexOf(this.modalService.formControl);
    namedFormArray.controls.splice(index, 1);
    this.modalService.modalRef.close();
  }

  save() {
    this.modalService.formControl.setValue(this.formValue);
    this.modalService.modalRef.close();
  }

}
