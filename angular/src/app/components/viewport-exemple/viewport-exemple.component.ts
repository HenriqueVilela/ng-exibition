import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CatCardComponent } from '../../cat-card/cat-card.component';
import { BasicTableComponent } from '../basic-table/basic-table.component';
import { RandomRoneyComponent } from '../random-roney/random-roney.component';
import { LoaderComponent } from '../loader/loader.component';


@Component({
  selector: 'app-viewport-exemple',
  standalone: true,
  imports: [MatGridListModule, RandomRoneyComponent, BasicTableComponent, LoaderComponent],
  templateUrl: './viewport-exemple.component.html',
  styleUrl: './viewport-exemple.component.scss'
})
export class ViewportExempleComponent {

  repeats: number[] = new Array(12);

}
