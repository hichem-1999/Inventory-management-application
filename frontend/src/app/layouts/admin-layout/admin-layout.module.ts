import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ListeProduitComponent } from 'app/liste-produit/liste-produit.component';
import { AjoutProduitComponent } from 'app/ajout-produit/ajout-produit.component';
import { ListeFournisseurComponent } from 'app/liste-fournisseur/liste-fournisseur.component';
import { AjoutFournisseurComponent } from 'app/ajout-fournisseur/ajout-fournisseur.component';
import { AjoutCategorieComponent } from 'app/ajout-categorie/ajout-categorie.component';
import { ListeCategorieComponent } from 'app/liste-categorie/liste-categorie.component';
import { ListeMarqueComponent } from 'app/liste-marque/liste-marque.component';
import { AjoutMarqueComponent } from 'app/ajout-marque/ajout-marque.component';
import { LogoutComponent } from 'app/logout/logout.component';
import { LoginComponent } from 'app/login/login.component';
import { ListeClientComponent } from 'app/liste-client/liste-client.component';
import { AjoutClientComponent } from 'app/ajout-client/ajout-client.component';
import { ListeCommandeAchatComponent } from 'app/liste-commande-achat/liste-commande-achat.component';
import { AjoutCommandeAchatComponent } from 'app/ajout-commande-achat/ajout-commande-achat.component';
import { ListeCommandeVenteComponent } from 'app/liste-commande-vente/liste-commande-vente.component';
import { AjoutCommandeVenteComponent } from 'app/ajout-commande-vente/ajout-commande-vente.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    AjoutProduitComponent,
    ListeProduitComponent,
    ListeClientComponent,
    AjoutClientComponent,
    ListeFournisseurComponent,
    AjoutFournisseurComponent,
    AjoutCategorieComponent,
    ListeCategorieComponent,
    ListeMarqueComponent,
    AjoutMarqueComponent,
    ListeCommandeAchatComponent,
    AjoutCommandeAchatComponent,
    ListeCommandeVenteComponent,
    AjoutCommandeVenteComponent,
    LoginComponent,
    LogoutComponent,
    
  ]
})

export class AdminLayoutModule {}
