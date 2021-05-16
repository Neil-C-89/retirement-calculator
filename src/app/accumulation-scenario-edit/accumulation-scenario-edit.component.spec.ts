import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationScenarioEditComponent } from './accumulation-scenario-edit.component';

describe('AccumulationScenarioEditComponent', () => {
  let component: AccumulationScenarioEditComponent;
  let fixture: ComponentFixture<AccumulationScenarioEditComponent>;

  beforeEach(async(() => {
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
