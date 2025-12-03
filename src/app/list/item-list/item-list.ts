import { Component, inject } from '@angular/core';
import { ItemsStore } from '../items/items.store';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  standalone: false,
  templateUrl: './item-list.html',
  styleUrl: './item-list.css',
})
export class ItemList {
store = inject(ItemsStore);
  auth = inject(AuthService);
  router = inject(Router);

  items = this.store.items;
  loading = this.store.loading;
  error = this.store.error;

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
