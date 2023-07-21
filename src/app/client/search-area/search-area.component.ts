import { Component, Output, EventEmitter } from '@angular/core';
import { SearchTermService } from '../../services/search-term.service';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.scss']
})
export class SearchAreaComponent {
  //@Output() searchTermChange = new EventEmitter<string>();
  searchTerm: string = '';
  isSearching: boolean = false;


  constructor(private searchTermService: SearchTermService) {}

  search() {
    this.searchTermService.setSearchTerm(this.searchTerm);
    console.log('Pesquisando por:', this.searchTerm);

    this.isSearching = this.searchTerm.trim() !== '';
  }

  clearSearch() {
    this.searchTerm = '';
    this.search();
  }
}
