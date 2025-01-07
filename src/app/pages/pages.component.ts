import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})

//dans <ngx-one-column-layout>
/* <nb-menu [items]="menu"></nb-menu> */

export class PagesComponent {
  menu = MENU_ITEMS;
}
