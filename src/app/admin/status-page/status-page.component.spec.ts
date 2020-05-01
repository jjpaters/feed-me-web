import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CoreBlocksModule } from '../../core-blocks/core-blocks.module';
import { StatusPageComponent } from './status-page.component';

describe('StatusPageComponent', () => {
  let component: StatusPageComponent;
  let fixture: ComponentFixture<StatusPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPageComponent ],
      imports: [
        CoreBlocksModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
