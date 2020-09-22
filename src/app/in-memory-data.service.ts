import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { School } from './School';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const schools = [
      { id: 11, name: 'Escola teste 1', address: 'rua' },
      { id: 12, name: 'Escola teste 3', address: 'avenida' },
      { id: 13, name: 'Escola teste 2', address: 'rua' },
    ];
    return {schools};
  }
  
  genId(schools: School[]): number {
    return schools.length > 0 ? Math.max(...schools.map(school => school.id)) + 1 : 11;
  }
}