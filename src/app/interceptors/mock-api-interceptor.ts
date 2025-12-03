import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MockApiInterceptor {
  private items = [
    { id: 1, name: "VitalMonitor Pro", description: "Real-time vital signs monitoring" },
    { id: 2, name: "CareAlert Plus", description: "Smart patient safety alerts" },
    { id: 3, name: "MediTrack 360", description: "Medication adherence tracker" },
    { id: 4, name: "NurseHub Pro", description: "Central nursing dashboard" },
    { id: 5, name: "FallSafe AI", description: "AI-powered fall prevention" }
  ];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/api/login') && req.method === 'POST') {
      const { email, password } = req.body || {};
      if (email === 'user@example.com' && password === 'password') {
        return of(new HttpResponse({
          status: 200,
          body: { token: 'mock-jwt-2025', user: { email } }
        })).pipe(delay(600));
      }
      return throwError(() => new HttpErrorResponse({ status: 401, error: 'Invalid credentials' })).pipe(delay(400));
    }

    if (req.url.endsWith('/api/items') && req.method === 'GET') {
      return of(new HttpResponse({ status: 200, body: this.items })).pipe(delay(800));
    }

    return next.handle(req);
  }
}