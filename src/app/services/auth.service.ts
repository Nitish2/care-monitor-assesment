import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password }).pipe(
      tap(res => {
        this.cookie.set('auth_token', res.token, { path: '/', sameSite: 'Lax' });
        this.cookie.set('user_email', res.user.email, { path: '/', sameSite: 'Lax' });
      })
    );
  }

  logout() { this.cookie.deleteAll('/'); }
  getEmail() { return this.cookie.get('user_email'); }
  isLoggedIn() { return this.cookie.check('auth_token'); }
}
