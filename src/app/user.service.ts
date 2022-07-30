import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './cart';
import { User } from './components/user-list/user-list.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getUsers = (): Observable<User[]> => {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  };
  getCartDetails = (userId:number): Observable<Cart[]> => {
    return this._http.get<Cart[]>(`https://dummyjson.com/users/${userId}/carts`);
  };
}
