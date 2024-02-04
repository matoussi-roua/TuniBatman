import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private usersrv:UsersService){}
  ngOnInit(){
      this.usersrv.getAllUsers().subscribe(
        (data: any) => {
          console.log(data);
        },
        (error: HttpErrorResponse) => {
          console.error('Error:', error);
        }
      );
    };
  }
  // ngOnInit():{
  //   this.usersrv.getAllUsers().subscribe(
  //     (variable: Users[]) => {
  //       console.log("heyoooo",variable)
  //     }
  //   );
  //   throw new Error('Method not implemented.');
  // }
