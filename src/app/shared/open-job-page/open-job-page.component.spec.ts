import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenJobPageComponent } from './open-job-page.component';

describe('OpenJobPageComponent', () => {
  let component: OpenJobPageComponent;
  let fixture: ComponentFixture<OpenJobPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenJobPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
