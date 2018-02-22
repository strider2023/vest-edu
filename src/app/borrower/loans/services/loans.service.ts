import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoansService {

  constructor(private http: HttpClient) { }

  getUserLoanDetails(): Observable<any> {
    return this.http.get('assets/debug-data/borrower-loans.json');
  }
}
