import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SchoolsComponent } from './schools/schools.component';
import { SchoolDetailComponent } from './school-detail/school-detail.component';
import { SchoolsSearchComponent } from './schools-search/schools-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolsComponent,
    SchoolDetailComponent,
    SchoolsSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
