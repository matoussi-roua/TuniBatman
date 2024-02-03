import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  usersrv: any;
  constructor( usersrv:UsersService){}
  ngOnInit(): void {
    this.usersrv.getAllUsers().subscribe(
      (variable: Users) => {
        console.log("heyoooo",this)
      }
    );
    throw new Error('Method not implemented.');
  }

}
