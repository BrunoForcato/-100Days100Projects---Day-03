import { EnvironmentInjector, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseURL = environment["endPoint"];

  constructor(private httpClient: HttpClient) { }

  LoginUser(userModel: JSON) {
    return this.httpClient.post<any>(`${this.baseURL}/login`, userModel);
  }
}
