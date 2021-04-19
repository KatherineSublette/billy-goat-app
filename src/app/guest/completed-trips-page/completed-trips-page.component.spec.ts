import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTripsPageComponent } from './completed-trips-page.component';

describe('CompletedTripsPageComponent', () => {
  let component: CompletedTripsPageComponent;
  let fixture: ComponentFixture<CompletedTripsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTripsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTripsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
