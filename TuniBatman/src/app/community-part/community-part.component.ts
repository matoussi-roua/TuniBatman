import { Component, OnInit } from '@angular/core';
import { Alerts } from '../models/alerts';
import { AlertsService } from '../services/alerts.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-community-part',
  templateUrl: './community-part.component.html',
  styleUrl: './community-part.component.css'
})
export class CommunityPartComponent implements OnInit{
   listAlert: Alerts[] = [];
  constructor(private alertsrv:AlertsService){}
  ngOnInit(): void{
    this.alertsrv.getAllAlerts().subscribe(
      (data: any[]) => {
        this.listAlert=data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
      }
    );

      
  }


}
