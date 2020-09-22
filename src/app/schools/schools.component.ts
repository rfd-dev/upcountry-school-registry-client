import { Component, OnInit } from '@angular/core';

import { School } from '../School';
import { SchoolService } from '../School.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  schools: School[];

  constructor(private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.getSchools();
  }

  getSchools(): void {
    this.schoolService.getSchools().subscribe(schools => this.schools = schools);
  }

  add(schoolName: string, schoolAddress: string){
    this.schoolService
      .addSchool({ name: schoolName.trim(), address: schoolAddress.trim() } as School)
      .subscribe(school => this.schools.push(school));
  }

  delete(school: School): void {
    this.schools = this.schools.filter(s => s !== school);
    this.schoolService.deleteSchool(school).subscribe();
  }

}
