import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { School } from '../School';
import { SchoolService } from '../School.service';

@Component({
  selector: 'app-school-detail',
  templateUrl: './school-detail.component.html',
  styleUrls: ['./school-detail.component.css']
})
export class SchoolDetailComponent implements OnInit {
  school: School;
  idRota: number;

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getSchool();
  }

  getSchool(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.idRota = id;
    this.schoolService.getSchool(id).subscribe(s => this.school = s);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void{
    this.schoolService.updateSchool(this.school)
    .subscribe(() => this.goBack());
  }
}
