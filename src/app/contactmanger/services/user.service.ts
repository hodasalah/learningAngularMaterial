import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: BehaviorSubject<User[]>
  private dataStore!: { users: User[] };
  constructor(private http: HttpClient) {
    this.dataStore = { users: [] }
    this._users = new BehaviorSubject<User[]>([]);
  }
  getUsers(): Observable<User[]> {
    return this._users.asObservable()
  }
  userById(id: number): User | undefined {
    return this.dataStore.users.find(u => u.id == id)
  }
  loadAll() {
    const DATA_URL = 'https://angular-material-api.azurewebsites.net/users'
    return this.http.get<User[]>(DATA_URL).subscribe((data: User[]) => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users)
    }, (err) => console.log(err))
  }
}
