import { Component } from '@angular/core';
import { CatService } from './cat.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent  {

  public cat: any;
  
  constructor(private catService: CatService) {
    this.cat = this.catService.getCat();
  }

}
