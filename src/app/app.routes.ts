import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'navbar', component: NavbarComponent },
];
