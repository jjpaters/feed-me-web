import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CoreBlocksModule } from './core-blocks/core-blocks.module';
import { Router } from '@angular/router';
import { AuthService } from './core-blocks/auth/auth.service';
import { NotifyService } from './core-blocks/notify/notify.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreBlocksModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
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

  it(`logOut should signOut amd navigate to home`, inject([AuthService, Router], (authService: AuthService, router: Router) => {
    spyOn(authService, 'signOut').and.stub();
    spyOn(router, 'navigate').and.stub();
    component.logOut();

    expect(authService.signOut).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  }));

  it(`navigate should clear notification`, inject([NotifyService, Router], (notifyService: NotifyService, router: Router) => {
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

});
