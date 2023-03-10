import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';

import { User } from '../models/user.model';

interface ResponseUsers{
  results: User[];
  info: any;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(results: number=5){
    return this.http.get <ResponseUsers>(`https://randomuser.me/api?results=${results}`)
    .pipe(
      map(response => response.results)
    );
  }
}
