import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewportExempleComponent } from './components/viewport-exemple/viewport-exemple.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'viewport-exemple',
        component: ViewportExempleComponent
    }
];
