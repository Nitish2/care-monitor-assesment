import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockApiInterceptor {
  private items = [
    { id: 1, name: "VitalMonitor Pro", description: "Real-time patient monitoring system" },
    { id: 2, name: "CareAlert Plus", description: "Smart patient safety alerts" },
    { id: 3, name: "MediTrack 360", description: "Medication adherence tracker" },
    { id: 4, name: "NurseHub", description: "Central nursing station dashboard" },
    { id: 5, name: "FallSafe AI", description: "AI-powered fall prevention" }
  ];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url === '/api/login') {
      const { email, password } = req.body;
      if (email === 'user@example.com' && password === 'password') {
        return of(new HttpResponse({
          status: 200,
          body: { token: 'mock-jwt-token-2025', user: { email } }
        })).pipe(delay(600));
      }
      return of(new HttpResponse({ status: 401, body: { error: 'Invalid credentials' } })).pipe(delay(400));
    }

    if (req.method === 'GET' && req.url === '/api/items') {
      return of(new HttpResponse({ status: 200, body: this.items })).pipe(delay(800));
    }

    return next.handle(req);
  }
}