import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Alerts } from '../models/alerts';
import { AlertsService } from '../services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  idAlert!:number;
  alert!:Alerts;
  constructor(private router:ActivatedRoute, private alertsrv:AlertsService){}
  ngOnInit(): void {
    this.idAlert = this.router.snapshot.params['id'];
 
this.alertsrv.getAlertById(this.idAlert).subscribe(
  (data :any)=>{
    this.alert=data;
  }
  
);
throw new Error('Method not implemented.');
  }

}
