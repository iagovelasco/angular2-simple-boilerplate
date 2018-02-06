import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {SharedModule} from './../shared/shared.module';
import { PageComponent } from 'app/page/page.component';
import { pageRouting } from 'app/page/page.routing';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(pageRouting),
  ],
  declarations: [
    PageComponent
  ],
  providers: [
  ]
})
export class PageModule { }
