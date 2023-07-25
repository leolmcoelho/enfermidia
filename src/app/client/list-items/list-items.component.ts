import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchTermService } from 'src/app/services/search-term.service';
import { Data } from './dados';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss'],
})
export class ListItemsComponent implements OnDestroy {
  @Input() items: any[] = Data; // Receive items from parent component
  filteredItems: any[] = [];
  searchTerm: string = '';
  isLoadingMoreData: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 50;
  scrollDistance: number = 2;

  private searchTermSubscription: Subscription | null = null;


  constructor(private searchTermService: SearchTermService) {
    this.searchTermSubscription = this.searchTermService.searchTerm$.subscribe(
      (searchTerm) => {
        this.searchTerm = searchTerm;
        this.filterItems();
      }
    );
  }
  ngOnInit() {
    this.searchTermService.searchTerm$.subscribe((searchTerm) => {
      this.searchTerm = searchTerm;
      this.filterItems();
    });
  
    // Adicione o event listener para o evento de scroll
    window.addEventListener('scroll', this.onScroll.bind(this));
  }
  
  ngOnDestroy() {
    this.searchTermSubscription?.unsubscribe();
  }

  filterItemsBySearchTerm() {
    // Aqui você pode implementar a lógica para filtrar os itens com base no searchTerm
    // Por exemplo, atualizar a lista de itens para mostrar apenas os que correspondem ao searchTerm
    // this.items = ...;
    return this.items.filter((item) =>
      item.nome.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterItems() {
    const lowerCaseSearchTerm = this.searchTerm.trim().toLowerCase();
  
    if (!lowerCaseSearchTerm) {
      this.filteredItems = this.items
        .slice(0, this.currentPage * this.itemsPerPage)
        .map((item) => ({ ...item, panelOpen: false }));
    } else {
      this.filteredItems = this.items
        .filter((item) =>
          item.termo.toLowerCase().includes(lowerCaseSearchTerm)
        )
        .slice(0, this.currentPage * this.itemsPerPage)
        .map((item) => {
          // Inserindo \n após cada ponto (.) na explicação
          const explicacaoWithLineBreak = item.explicacao.replace(/\./g, '.\n');
          console.log(explicacaoWithLineBreak);
          return { ...item, explicacao: explicacaoWithLineBreak, panelOpen: false };
        });
    }
  }
  
  

  loadMoreData() {
    console.log('Chamou a função loadMoreData');

    if (this.isLoadingMoreData) return;

    this.isLoadingMoreData = true;

    // Simule um atraso de 1 segundo para carregar mais dados
    setTimeout(() => {
      this.currentPage++;
      this.isLoadingMoreData = false;
      this.filterItems();
    }, 1000);
  }

  onScroll() {
    console.log('Chamou a função onScroll');
    const scrollPosition = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  
    // Set a threshold to load more data when the user is close to the bottom
    const threshold = 100; // Adjust this value as needed
  
    if (!this.isLoadingMoreData && scrollPosition >= maxScroll - threshold) {
      this.loadMoreData();
    }
  }

  replaceLineBreaks(text: string): string {
    return text.replace(/\./g, '.<br>');
  }
  
}
