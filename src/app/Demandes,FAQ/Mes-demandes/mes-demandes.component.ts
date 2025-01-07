import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-mes-demandes',
  standalone: true,
  imports: [],
  templateUrl: './mes-demandes.component.html',
  styleUrl: './mes-demandes.component.scss'
})
export class MesDemandesComponent {
  constructor(private router: Router){}
  view() {
    this.router.navigate(['/pages/demande-de-resiliation-en-cours']);
  }
  viewCreateDemande() {
    this.router.navigate(['/pages/creer-une-demande']);
  }
}
