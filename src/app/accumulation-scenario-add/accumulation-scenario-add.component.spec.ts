import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationScenarioAddComponent } from './accumulation-scenario-add.component';

describe('AccumulationScenarioAddComponent', () => {
  let component: AccumulationScenarioAddComponent;
  let fixture: ComponentFixture<AccumulationScenarioAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccumulationScenarioAddComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulationScenarioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
