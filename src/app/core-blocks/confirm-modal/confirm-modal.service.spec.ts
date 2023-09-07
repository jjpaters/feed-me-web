import { TestBed, inject } from '@angular/core/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalService } from './confirm-modal.service';

describe('ConfirmModalService', () => {
  let service: ConfirmModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set message, and invoke modal.open', inject([NgbModal], (modal: NgbModal) => {
    spyOn(modal, 'open'); 
    service.open('Message');
    expect(service.message).toEqual('Message');
    expect(modal.open).toHaveBeenCalled();
  }));

  it('should set confirmText, and invoke modal.open', inject([NgbModal], (modal: NgbModal) => {
    spyOn(modal, 'open'); 
    service.open('Message', 'Confirm');
    expect(service.confirmText).toEqual('Confirm');
    expect(modal.open).toHaveBeenCalled();
  }));

  it('should set denyText, and invoke modal.open', inject([NgbModal], (modal: NgbModal) => {
    spyOn(modal, 'open'); 
    service.open('Message', 'Confirm', 'Deny');
    expect(service.denyText).toEqual('Deny');
    expect(modal.open).toHaveBeenCalled();
  }));

});
