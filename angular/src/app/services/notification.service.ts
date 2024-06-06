
import { Injectable, signal } from '@angular/core';


export interface Notification extends Array<any>{
    message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications = signal<Notification[]>([]);

  addNotification(notification: Notification) {
    this.notifications.update((notifications) => {
        notifications.push(notification);
        return notifications
    });
  }

  clearNotifications() {
    this.notifications.set([]);
  }


}