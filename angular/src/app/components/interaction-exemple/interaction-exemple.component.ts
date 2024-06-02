import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-interaction-exemple',
  standalone: true,
  imports: [ItemComponent, MatButtonModule],
  templateUrl: './interaction-exemple.component.html',
  styleUrl: './interaction-exemple.component.scss'
})
export class InteractionExempleComponent {
  repeats: number[] = new Array(4);
}
