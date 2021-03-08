// The JWT Interceptor intercepts http requests from the application
// to add a JWT auth token to the Authorization header if the user is logged in.
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// make this a Singleton service
@Injectable({providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
    const token: string = sessionStorage.getItem('access_token');
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next.handle(request);
    }
}
