import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://vlada-tutorial--heroku.herokuapp.com/random-users')
  }
}
