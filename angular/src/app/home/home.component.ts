import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Notification, NotificationService } from '../services/notification.service';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, MatInputModule, MatIconModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public message: string = "";

  constructor(public notificationService: NotificationService) {

  }

  sendMessage() {
    if (this.message.trim() != "") {
      this.notificationService.addNotification({message: this.message} as Notification)
      this.message = "";
    }
  }
}
