import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormControlModalComponent } from './form-control-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FormControlModalService {

  formGroup: FormGroup<any>;
  formControl: AbstractControl<any, any>;
  modalRef: NgbModalRef;
  name: string;

  constructor(private modal: NgbModal) { }

  open(formGroup: FormGroup, formControl: AbstractControl<any, any>, name: string): NgbModalRef {
    this.formGroup = formGroup;
    this.formControl = formControl;
    this.name = name;
    this.modalRef = this.modal.open(FormControlModalComponent);
    return this.modalRef;
  }
}
