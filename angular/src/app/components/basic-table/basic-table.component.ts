import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Supino reto', weight: 40},
  {position: 2, name: 'Desenvolvimento', weight: 20},
  {position: 3, name: 'Cruxifixo', weight: 60},
  {position: 4, name: 'Puxada lateral', weight: 50},
  {position: 5, name: 'Puxada frente', weight: 55},
  {position: 6, name: 'Agachamento com peso', weight: 10},
  {position: 7, name: 'leg press 45°', weight: 220},
  {position: 8, name: 'leg press Horizontal', weight: 250},
  {position: 9, name: 'Panturilha', weight: 15},
  {position: 10, name: 'Remada cavalinho', weight: 45},
];


@Component({
  selector: 'app-basic-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './basic-table.component.html',
  styleUrl: './basic-table.component.scss'
})
export class BasicTableComponent {

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

}
