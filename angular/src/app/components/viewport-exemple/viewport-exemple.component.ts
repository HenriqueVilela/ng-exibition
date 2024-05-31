import { Component } from '@angular/core';
import { BasicTableComponent } from '../basic-table/basic-table.component';
import { LoaderComponent } from '../loader/loader.component';
import { ItemComponent } from '../item/item.component';


@Component({
  selector: 'app-viewport-exemple',
  standalone: true,
  imports: [ItemComponent, BasicTableComponent, LoaderComponent],
  templateUrl: './viewport-exemple.component.html',
  styleUrl: './viewport-exemple.component.scss'
})
export class ViewportExempleComponent {

  repeats: number[] = new Array(12);

}
