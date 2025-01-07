import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ContractService } from '../../services/contract.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'ngx-service',
  /* standalone: true,
  imports: [], */
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  selectedContract: any = null;
  countt: number | null = null;
  contracts: any[] = []; 
  constructor(private service:ContractService,private router: Router,private httpClient: HttpClient) {}
  // contracts = [
  //   { value: 'contract1', label: '16 rue Pierre Larousse, 75014 Paris Electricite, n° 1456378' },
  //   { value: 'contract2', label: 'Contrat 2' },
  //   { value: 'contract3', label: 'Contrat 3' },
  //   { value: 'contract4', label: 'Contrat 4' }
  // ];

  get contractCountt(): number {
    return this.contracts.length;
  }

  ngOnInit(): void {
    this.getContractData(); // Récupère le nombre de contrats
    this.fetchContract(); // Récupère les contrats
  }
  fetchContract(): void {
    this.service.fetchContract().subscribe(
      data => {
        console.log(data); // Vérifiez la structure des données ici
        if (data && data.d && Array.isArray(data.d.results)) {
          this.contracts = data.d.results;
        } else {
          console.error('Structure des données inattendue:', data);
        }
      },
      error => {
        console.error('Erreur lors de la récupération des données', error);
      }
    );
  }


  viewDetails() {
    this.router.navigate(['/pages/option-verte']);
  }
  consulteDetails() {
    this.router.navigate(['/pages/service-electricite']);
  }

  contractCount: number | null = null;
  getContractData(): void {
    this.service.fetchContractData().subscribe(
      (count) => {
        this.contractCount = Number(count);  // Convertir la chaîne en nombre
        console.log('Number of contracts:', this.contractCount);
      },
      (error) => {
        console.error('Error fetching contract count:', error);
      }
    );
  }
  AddressCompteur: string;
  BusinessSectorText :string;
  isOpen: boolean = false; 
  selectContract(contract: any) {
    this.AddressCompteur = contract.AddressCompteur; // Mettre à jour l'adresse sélectionnée
    this.BusinessSectorText  = contract.BusinessSectorText ; // Mettre à jour les détails sélectionnés
    this.isOpen = false;
    this.selectedContract = contract;
 
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen; // Alterner l'état du menu déroulant
  }

  contractts: any[] = [];
  // fetchContracts(): void {
  //   this.ContractService.fetchContractISU().subscribe(
  //     data => {
  //       console.log('Données reçues:', data);  // Affiche les données reçues dans la console
  //       if (data?.d?.results) {
  //         this.contractts = data.d.results; // Récupère le tableau de résultats
  //         console.log(this.BusinessSectorText);
  //         if (this.contractts.length > 0) {
  //           this.selectedContract = this.contractts[0];  // Le premier contrat sera sélectionné par défaut
            
  //         }
  //       } else {
  //         console.error('Aucune donnée trouvée.');
  //         this.contractts = []; // Assure que contractts est un tableau vide si aucune donnée n'est trouvée
  //       }
  //     },
  //     error => {
  //       console.error('Erreur lors de la récupération des données:', error); // Affiche l'erreur dans la console en cas de problème
  //       this.contractts = []; // Assure que contractts reste vide en cas d'erreur
  //     }
  //   );
  // }
}
