import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  template: `
    <mat-progress-spinner
      class="example-margin"
      color="primary"
      mode="indeterminate">
    </mat-progress-spinner>`
})
export class LoaderComponent {

}
