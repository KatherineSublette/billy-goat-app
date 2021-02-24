import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideMessagesPageComponent } from './guide-messages-page.component';

describe('GuideMessagesPageComponent', () => {
  let component: GuideMessagesPageComponent;
  let fixture: ComponentFixture<GuideMessagesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideMessagesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
