import { TestBed, ComponentFixture, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreBlocksModule } from './core-blocks/core-blocks.module';
import { NotifyService } from './core-blocks/notify/notify.service';
import { CoreAuthService } from './core-blocks/auth/core-auth.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        CoreBlocksModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`closeMenu should set navbarOpen to false`, () => {
    component.navbarOpen = true;
    fixture.detectChanges();
    component.closeMenu();

    expect(component.navbarOpen).toBeFalsy();
  });

  it(`navigate should clear notification`, inject([NotifyService], (notifyService: NotifyService) => {
    spyOn(notifyService, 'clear').and.stub();
    component.navigate('home');

    expect(notifyService.clear).toHaveBeenCalled();
  }));

  it(`should default navbarOpen to false`, () => {
    expect(component.navbarOpen).toBeFalsy();
  });

  it(`should set navbarOpen to "true" after calling toggleNavbar()`, () => {
    component.toggleNavbar();
    expect(component.navbarOpen).toBeTruthy();
  });

  it('should render title "Feed Me"', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a.navbar-brand').textContent).toContain('Feed Me');
  });

  it('should invoke coreAuthService.logIn', inject([CoreAuthService], (coreAuthService: CoreAuthService) => {
    spyOn(coreAuthService, 'logIn'); 
    component.logIn();
    expect(coreAuthService.logIn).toHaveBeenCalled();
  }));

  it('should invoke coreAuthService.logOut and closeMenu', inject([CoreAuthService], (coreAuthService: CoreAuthService) => {
    spyOn(coreAuthService, 'logOut');
    component.logOut();
    expect(coreAuthService.logOut).toHaveBeenCalled();
  }));

});
