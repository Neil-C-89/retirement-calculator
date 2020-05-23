import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScenariosService } from '../scenarios.service';

@Component({
  selector: 'app-accumulation-scenario-add',
  templateUrl: './accumulation-scenario-add.component.html',
  styleUrls: ['./accumulation-scenario-add.component.css']
})
export class AccumulationScenarioAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ss: ScenariosService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ScenarioName: ['', Validators.required],
      SavingsPerYear: ['', Validators.required],
      YearsToRetire: ['', Validators.required],
    });
  }

  addScenario(ScenarioName, SavingsPerYear, YearsToRetire) {
    this.ss.addScenario(ScenarioName, SavingsPerYear, YearsToRetire);
  }

  ngOnInit(): void {

  }
}
