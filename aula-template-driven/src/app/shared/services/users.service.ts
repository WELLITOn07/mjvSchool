import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<User> = [
    {
      id: 1,
      name: 'Welliton',
      email: 'w.elliton2010@hotmail.com',
      password: '2022'
    },
    {
      id: 2,
      name: 'Nathan',
      email: 'nathan@gmail.com',
      password: '2022'
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  };

  getUserByEmailAndPassword(email: string, password: string) {
    return this.users.find((user) => user.email === email && user.password === password)
  }
}
