import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulationScenarioGetComponent } from './accumulation-scenario-get.component';

describe('AccumulationScenarioGetComponent', () => {
  let component: AccumulationScenarioGetComponent;
  let fixture: ComponentFixture<AccumulationScenarioGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccumulationScenarioGetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccumulationScenarioGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
