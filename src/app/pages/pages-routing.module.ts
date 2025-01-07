import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConsommationComponent } from './consommation/consommation.component';
import { FactureComponent } from './facture/facture.component';
import { DocumentComponent } from './document/document.component';
import { ServiceComponent } from './service/service.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { DetailsContratComponent } from './details-contrat/details-contrat.component';
import { OptionVerteComponent } from './option-verte/option-verte.component';
import { ProfilComponent } from './profil/profil.component';
import { DetailsLogementComponent } from './details-logement/details-logement.component';
import { ServiceElectriciteComponent } from './service-electricite/service-electricite.component';
import { CreerUneDemandeComponent } from '../Demandes,FAQ/creer-une-demande/creer-une-demande.component';
import { DemandeDeResiliationComponent } from '../Demandes,FAQ/demande-de-resiliation/demande-de-resiliation.component';
import { MesDemandesComponent } from '../Demandes,FAQ/Mes-demandes/mes-demandes.component';
import { FAQComponent } from '../Demandes,FAQ/FAQ/faq.component';
import { DemandeDeResiliationEnCoursComponent } from '../Demandes,FAQ/demande-de-resiliation-en-cours/demande-de-resiliation-en-cours.component';



const routes: Routes = [{
  
  path: '',
  component: PagesComponent,
  children: [
    
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'acceuil',
      component: AcceuilComponent,
    },
    {
      path: 'consommation',
      component: ConsommationComponent,
    },
    {
      path: 'facture',
      component: FactureComponent,
    },
    {
      path: 'document',
      component: DocumentComponent,
    },
    {
      path: 'service',
      component: ServiceComponent,
    },
    {
      path: 'details-contrat',
      component: DetailsContratComponent,
    },
    {
      path: 'option-verte',
      component: OptionVerteComponent,
    },

    {
    path: 'service-electricite',
    component: ServiceElectriciteComponent,
  },
    {
      path: 'profil',
      component: ProfilComponent,
    },
    {
      path: 'details-logement',
      component: DetailsLogementComponent,
    },
    {
    path: 'creer-une-demande',
    component: CreerUneDemandeComponent,
  },
  {
  path: 'demande-de-resiliation',
  component: DemandeDeResiliationComponent,
},
{
  path: 'mes-demandes',
  component: MesDemandesComponent,
},
{
  path: 'FAQ',
  component: FAQComponent,
},
{
  path: 'demande-de-resiliation-en-cours',
  component: DemandeDeResiliationEnCoursComponent,
},
    
    
    {
      path: '',
      /* redirectTo: 'acceuil', */
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
