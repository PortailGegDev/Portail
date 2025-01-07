import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
    <nb-layout-header *ngIf="!isLoginPage" >
    <ngx-header [ngStyle]="{'width': '100%'}"></ngx-header>
    </nb-layout-header>
      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>
      <nb-layout-footer *ngIf="!isLoginPage" fixed>
      <ngx-footer></ngx-footer>
     </nb-layout-footer>
    </nb-layout>
  `,
})


export class OneColumnLayoutComponent  implements OnInit {
  isLoginPage: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Vérifier l'URL lors de l'initialisation du composant
    this.checkIfLoginPage(this.router.url);

    // Écoute des événements de navigation pour détecter les changements d'URL
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkIfLoginPage(event.urlAfterRedirects);
      }
    });
  }

  checkIfLoginPage(url: string) {
    // Remplacez '/login' par l'URL exacte de votre page de login
    this.isLoginPage = url.startsWith('/pages/login');
  }
}


