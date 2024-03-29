import { ComponentFixture, TestBed, waitForAsync, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreBlocksModule } from '../core-blocks/core-blocks.module';

import { HomePageComponent } from './home-page.component';
import { AuthService } from '@auth0/auth0-angular';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [
        CoreBlocksModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke authService.loginWithPopup', inject([AuthService], (authService: AuthService) => {
    spyOn(authService, 'loginWithPopup'); 
    component.logIn();
    expect(authService.loginWithPopup).toHaveBeenCalled();
  }));

});
