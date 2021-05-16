/* eslint-disable import/no-unresolved */
import { Component, OnInit } from '@angular/core';
import { ScenariosService } from '../scenarios.service';
import { AuthenticationService } from '../services/authentication.service';
// eslint-disable-next-line import/extensions
import Scenario from '../models/Scenario';

@Component({
  selector: 'app-accumulation-scenario-get',
  templateUrl: './accumulation-scenario-get.component.html',
  styleUrls: ['./accumulation-scenario-get.component.css'],
})
export class AccumulationScenarioGetComponent implements OnInit {
  scenarios: Scenario[];

  constructor(
    private ss: ScenariosService,
    public auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.ss.getScenarios().subscribe((data: Scenario[]) => {
      this.scenarios = data;
    });
  }

  deleteScenario(id) {
    this.ss.deleteScenario(id).subscribe((res) => {
      this.scenarios.splice(id, 1);
    });
  }
}
