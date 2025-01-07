import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';

interface Facture {
  selected?: boolean;
  dateEmission: string;
  factureNumber: string;
  montant: number;
  statut: string;
  details: string;
  /* telecharger: string; */
}

@Component({
  selector: 'ngx-details-contrat',
  // standalone: true,
  // imports: [],
  templateUrl: './details-contrat.component.html',
  styleUrl: './details-contrat.component.scss'
})
export class DetailsContratComponent {
  constructor(private router: Router){}
  showContent = false;
onClickIcon() {
    this.showContent = !this.showContent;
    console.log('showContent:', this.showContent);
  }
  hideContent() {
    this.showContent = false;
    console.log('hideContent triggered');
  }
  showEcheancier = false;
  isHidden = false;

  toggleEcheancier() {
    this.showEcheancier = !this.showEcheancier;
    this.isHidden = !this.isHidden;
  }
  isTableVisible = false;

  toggleTable() {
    this.isTableVisible = !this.isTableVisible;
  }
  closeTable() {
    this.isTableVisible = false;
  }
  RetourEnBack() {
    this.router.navigate(['/pages/document']);
  }
  facture: Facture = {
    dateEmission: '2024-08-06',
    factureNumber: '12345',
    montant: 100,
    statut: 'Payée',
    details: 'Détails de la facture'
  };
  downloadPDF(facture: Facture) {
    const doc = new jsPDF();

    doc.text(`Facture N°: ${facture.factureNumber}`, 10, 10);
    doc.text(`Date d'émission: ${facture.dateEmission}`, 10, 20);
    doc.text(`Montant: ${facture.montant}€`, 10, 30);
    doc.text(`Statut: ${facture.statut}`, 10, 40);
    doc.text(`Détails: ${facture.details}`, 10, 50);

    doc.save(`facture_${facture.factureNumber}.pdf`);

    alert(`Téléchargement du PDF pour la facture N° ${facture.factureNumber}`);
  }cd 
}
