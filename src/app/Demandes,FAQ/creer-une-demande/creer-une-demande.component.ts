import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-creer-une-demande',
  standalone: true,
  imports: [],
  templateUrl: './creer-une-demande.component.html',
  styleUrl: './creer-une-demande.component.scss'
})
export class CreerUneDemandeComponent {
  constructor(private router: Router){}
  viewDetail() {
    this.router.navigate(['/pages/demande-de-resiliation']);
  }
}
