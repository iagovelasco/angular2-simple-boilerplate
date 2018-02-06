import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import 'moment/locale/pt-br';
import * as moment from 'moment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router,
    private vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.configurarLocalizacaoDataHora();
  }

  private configurarLocalizacaoDataHora(): void {
    moment.locale('pt-br');
  }

}
