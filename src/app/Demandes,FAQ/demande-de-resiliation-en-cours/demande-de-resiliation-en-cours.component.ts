import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-demande-de-resiliation-en-cours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demande-de-resiliation-en-cours.component.html',
  styleUrl: './demande-de-resiliation-en-cours.component.scss'
})
export class DemandeDeResiliationEnCoursComponent {
  constructor(private router: Router){}
  RetourEnBack() {
    this.router.navigate(['/pages/mes-demandes']);
  }
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  performAction(action: string) {
    console.log('Action performed:', action);
    this.isDropdownOpen = false; // Ferme le dropdown après l'action
  }
  viewCreateDemande() {
    this.router.navigate(['/pages/creer-une-demande']);
  }
}
