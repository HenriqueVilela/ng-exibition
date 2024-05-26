import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRouteSnapshot, RouterLink,  } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
