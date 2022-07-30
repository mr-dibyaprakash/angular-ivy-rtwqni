import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from '../../user.service';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
  };

  userArray: User[] = [];

  username: string = '';

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.userArray = data;
    });
  }

  id: number = 0;

  onClick = (user: User) => {
    this.username = user.username;
    this.id = user.id;
  };
}
