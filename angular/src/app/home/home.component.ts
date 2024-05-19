import { Component } from '@angular/core';
import { CatCardComponent } from '../cat-card/cat-card.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CatCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
