import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-random-roney',
  standalone: true,
  template: `
  <div style="border-radius: inherit; width: 100%; height: 100%;">
    <img style="border-radius: inherit;" height="100%" width="100%" [src]="roney" alt="roney mendes">
  </div>`
})
export class RandomRoneyComponent {
  public roney = environment.roney[Math.floor(Math.random() * 5)] ?? environment.roney[0] ;
}
