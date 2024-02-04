import { Component } from '@angular/core';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent {

  isAlertVisible: boolean = false;

  showAlert() {
    this.isAlertVisible = true;

    // Set a timeout to hide the alert after 5000 milliseconds (adjust the duration as needed)
    setTimeout(() => {
      this.hideAlert();
    }, 5000);
  }

  hideAlert() {
    this.isAlertVisible = false;
  }
}


