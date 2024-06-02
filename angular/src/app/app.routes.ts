import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewportExempleComponent } from './components/viewport-exemple/viewport-exemple.component';
import { InfiniteRoneyListComponent } from './components/infinite-roney-list/infinite-roney-list.component';
import { InteractionExempleComponent } from './components/interaction-exemple/interaction-exemple.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'viewport-exemple',
        component: ViewportExempleComponent
    },
    {
        path: 'list-exemple',
        component: InfiniteRoneyListComponent
    },
    {
        path: 'interactive-exemple',
        component: InteractionExempleComponent
    }
];
