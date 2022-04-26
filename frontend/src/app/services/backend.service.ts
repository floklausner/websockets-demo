import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  public get<T>(route: string): Promise<T> {
    return firstValueFrom<T>(this.http.get<T>(this.baseUrl + route));
  }

  public post<T>(route: string, body: any): Promise<T> {
    return firstValueFrom<T>(this.http.post<T>(this.baseUrl + route, body));
  }
}
