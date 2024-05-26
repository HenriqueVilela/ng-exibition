import { Component } from '@angular/core';
import { CatService } from './cat.service';
import {MatCardModule} from '@angular/material/card';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent  {

  public cat = {name: 'gatinho', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBIUQQoDDbIzMvwjkNAD5Rto_1q_Kc9r5XAuhgoDUSg&s"} as any;
  
  constructor(private catService: CatService) {
    // this.cat = this.catService.getCat();
    // this.cat.name = faker.person.firstName();
  }

}
