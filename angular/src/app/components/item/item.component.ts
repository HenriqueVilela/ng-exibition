import { Component } from '@angular/core';
import { RandomRoneyComponent } from '../random-roney/random-roney.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [RandomRoneyComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

}
