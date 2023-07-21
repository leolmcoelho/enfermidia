import { Component, Input } from '@angular/core';

import { SearchTermService } from 'src/app/services/search-term.service';
import { Data } from './dados';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],

})
export class ListItemsComponent {

  @Input() items: any[] = Data; // Receive items from parent component
  searchTerm: string = '';

  panelOpenState:boolean = false; 

  //@Input() items: any[] = [];
  filteredItems: any[] = [];
  //searchTerm: string = '';

  constructor(private searchTermService: SearchTermService) {}

  /*ngOnInit() {
    this.searchTermService.searchTerm$.subscribe((searchTerm) => {
      // Use o valor do searchTerm para filtrar ou atualizar a lista de itens
      this.filterItemsBySearchTerm();
    });
  }*/

  ngOnInit() {
    this.searchTermService.searchTerm$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.filterItems();
    });
  }

  filterItemsBySearchTerm() {
    // Aqui você pode implementar a lógica para filtrar os itens com base no searchTerm
    // Por exemplo, atualizar a lista de itens para mostrar apenas os que correspondem ao searchTerm
    // this.items = ...;
    return this.items.filter(item => item.nome.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  /*filteredItems(): any[] {
    if (!this.searchTerm.trim()) {
      return this.items;
    }

    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    return this.items.filter(item => item.Termo.toLowerCase().includes(lowerCaseSearchTerm));
  }*/

  filterItems() {
    if (!this.searchTerm.trim()) {
      this.filteredItems = this.items.map(item => ({ ...item, panelOpen: false })); // Initialize panelOpen as false for all items
      return;
    }
    console.log(this.searchTerm);
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    this.filteredItems = this.items
      .filter(item => item.termo.toLowerCase().includes(lowerCaseSearchTerm))
      .map(item => ({ ...item, panelOpen: false })); // Initialize panelOpen as false for filtered items
  }
  
}
