import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MENU_ITEMS } from '../../../pages/pages-menu';
import { Router } from '@angular/router';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  isLoginPage: boolean = false;
  isDropdownOpen = false;
  isHelpDropdownOpen = false; // Pour l'aide et contact
  menu = MENU_ITEMS;
  currentSection: string = ''; // Initialise la section courante

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,private brandService: BrandService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private router: Router,
              private breakpointService: NbMediaBreakpointsService) {
  }
  logo: string = ''; // Contiendra le chemin du logo
  theme: string = '';
  ngOnInit() {
    this.logo = this.brandService.getLogo();
    this.theme = this.brandService.getBrand();
    this.router.events
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.isLoginPage = this.router.url.includes('/login');
        
        // Mettez à jour currentSection en fonction de l'URL
        if (this.router.url.includes('/pages/consommation')) {
          this.currentSection = 'Consommation';
        } else if (this.router.url.includes('/pages/acceuil')) {
          this.currentSection = 'Accueil';
        } else if (this.router.url.includes('/pages/facture')) {
          this.currentSection = 'Factures';
        } else if (this.router.url.includes('/pages/document')) {
          this.currentSection = 'Documents';
        } else if (this.router.url.includes('/pages/service')) {
          this.currentSection = 'Services';
        } else {
          this.currentSection = ''; // Réinitialiser si aucune section ne correspond
        }
      });

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.user = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
  }

  // toggleDropdown(event: MouseEvent): void {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  //   event.stopPropagation();
  // }
  
  // toggleHelpDropdown(event: MouseEvent): void {
  //   this.isHelpDropdownOpen = !this.isHelpDropdownOpen; // Inverse l'état du dropdown d'aide
  //   event.stopPropagation(); // Empêche le clic de se propager
  // }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdownElement = target.closest('.dropdown');

    if (!dropdownElement) {
      this.isDropdownOpen = false;
      this.isHelpDropdownOpen = false; // Fermer le dropdown d'aide
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  onMenuClick(item) {
    if (item.title === 'Log out') {
      // Ajoutez ici la logique de déconnexion
    } else if (item.title === 'Profile') {
      // Ajoutez ici la logique pour accéder au profil
    }
  }

  viewDetails() {
    this.router.navigate(['/pages/profil']);
  }

  viewDetail() {
    this.router.navigate(['/pages/creer-une-demande']);
  }

  deconnecte() {
    this.router.navigate(['/pages/login']);
  }

  mesDemandes() {
    this.router.navigate(['/pages/mes-demandes']); 
  }

  FAQ() {
    this.router.navigate(['/pages/FAQ']); 
  }

  onSectionClick(section: string) {
    this.currentSection = section; // Met à jour la section courante

    // Effectuer la navigation
    switch (section) {
      case 'Accueil':
        this.router.navigate(['/pages/acceuil']);
        break;
      case 'Consommation':
        this.router.navigate(['/pages/consommation']);
        break;
      case 'Factures':
        this.router.navigate(['/pages/facture']);
        break;
      case 'Documents':
        this.router.navigate(['/pages/document']);
        break;
      case 'Services':
        this.router.navigate(['/pages/service']);
        break;
      default:
        this.router.navigate(['/accueil']); // Redirection par défaut
        break;
    }
  }

  isResponsive: boolean = false;
  toggleNavbar() {
    this.isResponsive = !this.isResponsive;
  }

//   toggleDropdown(event: Event) {
//     this.isDropdownOpen = !this.isDropdownOpen;
//     this.isHelpDropdownOpen = false; // Close help dropdown
// }

// toggleHelpDropdown(event: Event) {
//     this.isHelpDropdownOpen = !this.isHelpDropdownOpen;
//     this.isDropdownOpen = false; // Close profile dropdown
// }
toggleDropdown(event: Event): void {
  this.isDropdownOpen = !this.isDropdownOpen;
  this.isHelpDropdownOpen = false;  // Close the Help dropdown if it's open
  event.stopPropagation(); // Prevents the event from bubbling up to the document
}

toggleHelpDropdown(event: Event): void {
  this.isHelpDropdownOpen = !this.isHelpDropdownOpen;
  this.isDropdownOpen = false;  // Close the Profile dropdown if it's open
  event.stopPropagation(); // Prevents the event from bubbling up to the document
}

}
