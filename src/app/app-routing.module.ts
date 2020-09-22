import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/schools', pathMatch: 'full' },
  { path: 'school/:id', component: SchoolDetailComponent },
  { path: 'schools', component: SchoolsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
