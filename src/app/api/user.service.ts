import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { FullUser } from '../model/full-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = '/api/';
  }

  public getUser(id): Observable<FullUser> {
    console.log('entro');
    return this.http.get<FullUser>(this.usersUrl+'user/'+id);
  }
  
}
