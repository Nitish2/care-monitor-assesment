import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
email :string='';

  constructor(private auth: AuthService, private router: Router) {
    this.auth.getEmail();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
