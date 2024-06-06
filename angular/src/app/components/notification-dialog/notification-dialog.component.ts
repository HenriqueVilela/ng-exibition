import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-dialog',
  standalone: true,
  imports: [MatFormFieldModule, MatButtonModule, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatListModule],
  template: `
  <h2 mat-dialog-title>Mensagens</h2>
  <mat-dialog-content style="width: 400px; margin: 50px">
    <mat-list style="max-height: 250px;" role="list">
      @for (notification of notifications(); track $index) {
        <mat-list-item style="margin: 10px; padding: 10px; background-color: #d6d4d7; border-radius: 5px;" role="listitem">{{notification.message}}</mat-list-item>
      }
    </mat-list>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-button (click)="close()">Fechar</button>
  </mat-dialog-actions>`,
})

export class NotificationDialogComponent {
  public notifications = this.notificationService.notifications;

  constructor(public dialogRef: MatDialogRef<NotificationDialogComponent>, public notificationService: NotificationService) {

  }

  close(): void {
    this.dialogRef.close();
  }

}
