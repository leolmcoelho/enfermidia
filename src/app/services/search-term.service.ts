import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTermService {

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  setSearchTerm(searchTerm: string) {
    console.log('setSearchTerm', searchTerm);
    this.searchTermSubject.next(searchTerm);
  }

  getFilteredSearchTerm() {
    return this.searchTermSubject.getValue()?.toLowerCase();
  }
  constructor() { }
}
