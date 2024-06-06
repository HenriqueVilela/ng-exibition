import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRouteSnapshot, RouterLink,  } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NotificationDialogComponent } from '../components/notification-dialog/notification-dialog.component';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatBadgeModule, MatDialogModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  
  public notifications = this.notificationService.notifications;

  constructor(public notificationService: NotificationService, public dialog: MatDialog) {

  }

  public openNotifications() {
    const dialogRef = this.dialog.open(NotificationDialogComponent);
    dialogRef.afterClosed().subscribe(() => this.notificationService.clearNotifications());
  }

}
