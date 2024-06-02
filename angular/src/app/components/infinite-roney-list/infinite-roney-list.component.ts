import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-infinite-roney-list',
  standalone: true,
  imports: [ItemComponent, LoaderComponent],
  templateUrl: './infinite-roney-list.component.html',
  styleUrl: './infinite-roney-list.component.scss'
})
export class InfiniteRoneyListComponent {

  repeats: number[] = new Array(150);
}
