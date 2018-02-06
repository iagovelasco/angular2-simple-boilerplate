import { Routes } from '@angular/router';

export const appModuleRoutes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'page', loadChildren: 'app/page/page.module#PageModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];


