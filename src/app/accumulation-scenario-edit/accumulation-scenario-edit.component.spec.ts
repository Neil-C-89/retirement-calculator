import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccumulationScenarioEditComponent } from './accumulation-scenario-edit.component';

describe('AccumulationScenarioEditComponent', () => {
  let component: AccumulationScenarioEditComponent;
  let fixture: ComponentFixture<AccumulationScenarioEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AccumulationScenarioEditComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulationScenarioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
