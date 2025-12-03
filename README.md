# CareMonitor - Angular Interview Task

### Features Implemented
- Login page with Material form + API authentication
- Cookie-based auth using ngx-cookie-service
- Protected routes with AuthGuard
- Dashboard with user email + navigation + logout
- Lazy-loaded List module with SignalStore
- Items list from API with loading spinner + error state + retry
- Angular Material UI (preferred)
- Custom mock API via interceptor
- RxJS best practices
- Modular design

### Login Credentials
Email: `user@example.com`  
Password: `password`

### Setup Instructions
1. Clone the repo: `https://github.com/Nitish2/care-monitor-assesment.git`
2. Install dependencies: `npm install or npm install --legacy-peer-deps `
3. Run the app: `ng serve`

### Architecture & Approach
- **Auth**: ngx-cookie-service for token storage, AuthGuard for protected routes
- **State**: NgRx SignalStore for items list (bonus point)
- **API**: Custom HttpInterceptor for mock endpoints (POST /api/login, GET /api/items)
- **UI**: Angular Material for components (preferred)
- **Routing**: Lazy-loaded List module (bonus point)
- **Error Handling**: RxJS catchError + retry button
