import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../services/brand.service';
// import { OAuthService } from 'angular-oauth2-oidc';

@Component({
    selector: 'ngx-login',
    /* selector: 'app-login', */
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
  })

  export class LoginComponent {

    email: string = '';
    password: string = '';
    passwordVisible: boolean = false;
    submitted: boolean = false;

    constructor(private router: Router,private brandService: BrandService) {}

    //TODO
    // navigateToAcceuil() {
    //   this.router.navigate(['/pages/acceuil']);
    // }
  
    // togglePasswordVisibility() {
    //   this.passwordVisible = !this.passwordVisible;
    //   const passwordInput = document.getElementById('password') as HTMLInputElement;
    //   passwordInput.type = this.passwordVisible ? 'text' : 'password';
    // }
  
    onSubmit() {
      this.submitted = true;
    
      // Vérifier si tous les champs sont remplis
      if (!this.email || !this.password || !this.chooseBrand) {
        alert('Veuillez remplir tous les champs : adresse e-mail, mot de passe et marque.');
        return;
      }
    
      // Vérifier si l'email correspond à l'adresse prédéfinie
      if (this.email !== 'btptechnicaluser@geg.fr') {
        alert('L\'adresse e-mail doit être "btptechnicaluser@geg.fr".');
        return;
      }
      if (this.password !== 'btptechnicaluser?123') {
        alert('L\'adresse e-mail doit être "btptechnicaluser@geg.fr".');
        return;
      }
    
    
      // Si toutes les validations passent, rediriger l'utilisateur
      console.log('Connexion avec :', {
        email: this.email,
        password: this.password,
        brand: this.chooseBrand,
      });
    
      this.router.navigate(['/pages/acceuil']); // Redirection vers la page d'accueil
    }

  // onSubmit(): void {
  //   this.oauthService.initCodeFlow(); // Démarre le flux d'authentification OAuth2
  // }

    chooseBrand(brand: string): void {
      this.brandService.setBrand(brand);

     // Redirige vers la page d'accueil
    }


    togglePasswordVisibility(): void {
      const passwordInput = document.getElementById('password') as HTMLInputElement;
      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    }
  
    // chooseBrand(brand: string): void {
    //   console.log(`Selected brand: ${brand}`);
    //   // Ajoutez la logique liée au choix de la marque si nécessaire
    // }
  }
