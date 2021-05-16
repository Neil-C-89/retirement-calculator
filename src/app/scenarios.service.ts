import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScenariosService {
  uri = 'http://localhost:4000/scenarios';

  constructor(private http: HttpClient) {}

  addScenario(ScenarioName: any, SavingsPerYear: any, YearsToRetire: any) {
    const obj = {
      ScenarioName,
      SavingsPerYear,
      YearsToRetire,
    };
    this.http.post(`${this.uri}/add`, obj).subscribe(() => console.log('Done'));
  }

  getScenarios() {
    return this.http.get(`${this.uri}`);
  }

  deleteScenario(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
