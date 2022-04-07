import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ListeProduitComponent } from 'app/liste-produit/liste-produit.component';
import { AjoutProduitComponent } from 'app/ajout-produit/ajout-produit.component';
import { AjoutFournisseurComponent } from 'app/ajout-fournisseur/ajout-fournisseur.component';
import { ListeFournisseurComponent } from 'app/liste-fournisseur/liste-fournisseur.component';
import { ListeCategorieComponent } from 'app/liste-categorie/liste-categorie.component';
import { AjoutCategorieComponent } from 'app/ajout-categorie/ajout-categorie.component';
import { ListeMarqueComponent } from 'app/liste-marque/liste-marque.component';
import { AjoutMarqueComponent } from 'app/ajout-marque/ajout-marque.component';
import { LoginComponent } from 'app/login/login.component';
import { LogoutComponent } from 'app/logout/logout.component';
import { AuthGaurdService } from 'app/service/authGaurd.service';

import { ListeCommandeAchatComponent } from 'app/liste-commande-achat/liste-commande-achat.component';
import { AjoutCommandeAchatComponent } from 'app/ajout-commande-achat/ajout-commande-achat.component';
import { AjoutCommandeVenteComponent } from 'app/ajout-commande-vente/ajout-commande-vente.component';
import { ListeCommandeVenteComponent } from 'app/liste-commande-vente/liste-commande-vente.component';
import { AjoutClientComponent } from 'app/ajout-client/ajout-client.component';
import { ListeClientComponent } from 'app/liste-client/liste-client.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-produit',   component: AjoutProduitComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-produit',     component: ListeProduitComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-commande-achat',   component: AjoutCommandeAchatComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-commande-achat',     component: ListeCommandeAchatComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-commande-vente',   component: AjoutCommandeVenteComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-commande-vente',     component: ListeCommandeVenteComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-client',        component: ListeClientComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-client',        component: AjoutClientComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-marque',        component: ListeMarqueComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-marque',        component: AjoutMarqueComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-fournisseur',        component: AjoutFournisseurComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-fournisseur',        component: ListeFournisseurComponent ,canActivate:[AuthGaurdService]},
    { path: 'liste-categorie',        component: ListeCategorieComponent ,canActivate:[AuthGaurdService]},
    { path: 'ajout-categorie',        component: AjoutCategorieComponent ,canActivate:[AuthGaurdService]},

    {path: 'login',                      component: LoginComponent},
    { path: 'logout',                   component: LogoutComponent ,canActivate:[AuthGaurdService] },
    {path:'',redirectTo:'/login',pathMatch:'full'}

  
    
];
