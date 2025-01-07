// import { Component } from '@angular/core';

// @Component({
//   selector: 'ngx-footer',
//   styleUrls: ['./footer.component.scss'],
//   template: `
//   <div class="footer">
//     <span class="footer-content">
//       <img src="assets/images/logo_GEG.jpg" alt="GEG logo" class="logo">
//       📞 Joindre un conseiller 04 76 84 20 00 du lundi au vendredi de 8h à 19h |
//       <a href="#">Mentions légales</a> |
//       <a href="#">CGV</a> |
//       L'énergie est notre avenir, économisons-la
//     </span>
//     <span class="social-media">
//       Nous suivre
//       <a href="#"><img src="assets/images/logo_instagram.png" alt="Instagram"></a>
//       <a href="#"><img src="assets/images/logo_youtube.png" alt="Youtube"></a>
//       <a href="#"><img src="assets/images/logo_twitter_x.png" alt="Twitter"></a>
//       <a href="#"><img src="assets/images/logo_linkedin.png" alt="LinkedIn"></a>
//       <a href="#"><img src="assets/images/logo_facebook.png" alt="Facebook"></a>
//     </span>
//   </div>
//   `,
// })
// export class FooterComponent {}


import { Component } from '@angular/core';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
templateUrl: './footer.component.html',  // Utilisation d'un fichier HTML externe pour le template
})
export class FooterComponent {
  logo: string = ''; // Contiendra le chemin du logo
  theme: string = '';
  constructor(private brandService: BrandService){}
  ngOnInit() {
    this.logo = this.brandService.getLogo();
    this.theme = this.brandService.getBrand();
  }
}
