import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { School } from './school';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  private schoolsURL = 'api/schools';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(this.schoolsURL)
      .pipe(
        catchError(this.handleError<School[]>('getSchools', []))
      );
  }

  getSchool(id: number): Observable<School> {
    const url = `${this.schoolsURL}/${id}`;
    return this.http.get<School>(url).pipe(      
      catchError(this.handleError<School>(`getSchool id=${id}`))
    );
  }

  searchSchools(filter: string): Observable<School[]>
  {
    if(!filter.trim()){
      return of([]);
    }

    return this.http.get<School[]>(`${this.schoolsURL}/?name=${filter}`)
      .pipe(        
        catchError(this.handleError<School[]>('searchSchools', []))
      );
  }
  
  addSchool(school: School): Observable<School> {
    return this.http.post<School>(this.schoolsURL, school, this.httpOptions).pipe(      
      catchError(this.handleError<School>('school'))
    );
  }
  
  deleteSchool(school: School | number): Observable<School> {
    const id = typeof school === 'number' ? school : school.id;
    const url = `${this.schoolsURL}/${id}`;

    return this.http.delete<School>(url, this.httpOptions).pipe(      
      catchError(this.handleError<School>('deleteSchool'))
    );
  }
  
  updateSchool(school: School): Observable<any> {
    return this.http.put(this.schoolsURL, school, this.httpOptions).pipe(      
      catchError(this.handleError<any>('updateSchool'))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
