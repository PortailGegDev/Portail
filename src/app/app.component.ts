import { Component, OnInit, Renderer2 } from '@angular/core';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { NavigationEnd, Router } from '@angular/router';
import { BrandService } from './services/brand.service';


@Component({
  selector: 'ngx-app',
  /* template: '<router-outlet></router-outlet>', */
  template: `
  <router-outlet></router-outlet>`,

})
export class AppComponent implements OnInit {
  isLoginPage: boolean = false;
  title: string = "N'importe quoi";

  constructor(private analytics: AnalyticsService, private seoService: SeoService, private router: Router,
    private brandService: BrandService, private renderer: Renderer2) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/pages/login';
      }
    });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.applyTheme();
  }

  applyTheme(): void {
    const theme = this.brandService.getBrand();
    const linkElement = this.renderer.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = theme === 'geg' ? 'assets/css/geg.css' : 'assets/css/yeli.css';
    this.renderer.appendChild(document.head, linkElement);
  }
}


