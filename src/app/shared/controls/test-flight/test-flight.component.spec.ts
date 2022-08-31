import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFlightComponent } from './test-flight.component';

describe('TestFlightComponent', () => {
  let component: TestFlightComponent;
  let fixture: ComponentFixture<TestFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
