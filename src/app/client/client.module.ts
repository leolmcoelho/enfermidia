import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInfoComponent } from './card-info/card-info.component';
import { DicionaryComponent } from './dicionary/dicionary.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { FormsModule } from '@angular/forms';
import { ListItemsComponent } from './list-items/list-items.component';
import { FilterByPropertyPipe } from './filter-by-property.pipe';

import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    CardInfoComponent,
    DicionaryComponent,
    SearchAreaComponent,
    ListItemsComponent,
    FilterByPropertyPipe
  ],
  imports: [
    CommonModule, // Add CommonModule here
    FormsModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    DicionaryComponent
  ]
})
export class ClientModule { }
