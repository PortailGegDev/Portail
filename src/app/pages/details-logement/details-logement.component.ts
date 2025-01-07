import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Ajoutez cette ligne


@Component({
  selector: 'ngx-details-logement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './details-logement.component.html',
  styleUrl: './details-logement.component.scss'
})
export class DetailsLogementComponent implements OnInit {
  selectedType: string = '';
  selectedHeating: string = '';
  superficie: number;
  nombreHabitants: number;
  selectedPv: string;
  nombrePanneaux: number;
  selectedPvv: string;
  selectedCar: string;


  ngOnInit(): void {
    const savedType = localStorage.getItem('selectedType');
    const savedHeating = localStorage.getItem('selectedHeating');
    const savedSuperficie = localStorage.getItem('superficie');
    const savedNombreHabitants = localStorage.getItem('nombreHabitants');
    const savedPv = localStorage.getItem('selectedPv');
    

    if (savedType) {
      this.selectedType = savedType; // Récupère la sélection enregistrée pour selectedType
    }
    if (savedHeating) {
      this.selectedHeating = savedHeating; // Récupère la sélection enregistrée pour selectedHeating
    }
    if (savedPv) {
      this.selectedPv = savedPv;
    }
    this.superficie = savedSuperficie ? +savedSuperficie : 75 ; // Utiliser une valeur par défaut si rien n'est trouvé
    this.nombreHabitants = savedNombreHabitants ? +savedNombreHabitants : 4; 
    this.nombrePanneaux = +localStorage.getItem('nombrePanneaux') || 4;
    this.selectedPvv = localStorage.getItem('selectedPvv') || '';
    this.selectedCar = localStorage.getItem('selectedCar') || '';

  }
  constructor(private router: Router){}
  RetourEnBack() {
    this.router.navigate(['/pages/profil']);
  }

  selectType(type: string): void {
    this.selectedType = type;
    localStorage.setItem('selectedType', type);  // Enregistrer la sélection
  }
  selectHeating(heating: string) {
    this.selectedHeating = heating;
    localStorage.setItem('selectedHeating',heating);  // Enregistrer la sélection

  }

  navigateToService() {
    this.router.navigate(['/pages/service']);
  }
  selectPv(value: string): void {
    this.selectedPv = value;
    localStorage.setItem('selectedPv', value);
  }
  selectPvv(value: string): void {
    this.selectedPvv = value;
    localStorage.setItem('selectedPvv', value);
  }

  // Gérer la sélection pour la voiture électrique
  selectCar(value: string): void {
    this.selectedCar = value;
    localStorage.setItem('selectedCar', value);
  }
  saveChanges(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  saveSelection() {
    // Ici, vous pouvez implémenter la logique pour enregistrer la sélection
    console.log('Type de logement sélectionné:', this.selectedType);
    console.log('Type de chauffage sélectionné:', this.selectedHeating);
    console.log('Superficie:', this.superficie);
    console.log('Nombre d\'habitants:', this.nombreHabitants);
    console.log('Avez-vous des panneaux photovoltaïques ?', this.selectedPv);
    console.log('Nombre de panneaux:', this.nombrePanneaux);
    console.log('Avez-vous Une voiture électrique ?', this.selectedCar);
    console.log('Avez-vous Une piscine ?', this.selectedPvv);

    
  }
}
