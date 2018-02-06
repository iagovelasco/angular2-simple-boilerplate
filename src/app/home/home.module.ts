import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home.component';
import { homeModuleRoutes } from './home.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeModuleRoutes),
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }
