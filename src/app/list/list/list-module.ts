import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemList } from '../item-list/item-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ListRoutingModule } from './list-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [ItemList],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ]
})
export class ListModule { }
