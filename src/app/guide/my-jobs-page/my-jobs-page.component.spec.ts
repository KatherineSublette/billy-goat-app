import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobsPageComponent } from './my-jobs-page.component';

describe('MyJobsPageComponent', () => {
  let component: MyJobsPageComponent;
  let fixture: ComponentFixture<MyJobsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyJobsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
