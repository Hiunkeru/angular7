import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/UserModel';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _apiUrl;

  constructor(private http: HttpClient) {
      this._apiUrl = environment.apiendpoint;
   }

  getuserName() {

    this.http.get(this._apiUrl + 'api/User/1212')
      .subscribe(resp => {
          console.log(resp);
      });
  }

  getUsers() {

    return this.http.get(this._apiUrl + 'api/User/users');

  }

  adduser(user: User) {

    this.http.post(this._apiUrl + 'api/User/adduser', user)
      .subscribe(resp => {
        console.log(resp);
      });

  }


}
