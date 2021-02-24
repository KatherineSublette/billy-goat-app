import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideOldJobsPageComponent } from './guide-old-jobs-page.component';

describe('GuideOldJobsPageComponent', () => {
  let component: GuideOldJobsPageComponent;
  let fixture: ComponentFixture<GuideOldJobsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideOldJobsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideOldJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
