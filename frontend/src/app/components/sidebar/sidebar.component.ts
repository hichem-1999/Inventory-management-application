import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/liste-produit', title: 'Les produits',  icon:'content_paste', class: '' },
    { path: '/liste-marque', title: 'Les marques',  icon:'inventory_2', class: '' },
    { path: '/liste-categorie', title: 'Les categories',  icon:'category', class: '' },
    { path: '/liste-client', title: 'Les clients',  icon:'person', class: '' },
    { path: '/liste-commande-vente', title: "Les commandes de vente",  icon:'local_mall', class: '' },
    { path: '/liste-fournisseur', title: 'Les fournisseurs',  icon:'people_alt', class: '' },
    { path: '/liste-commande-achat', title: "Les commandes d'achat",  icon:'border_color', class: '' },
    
   
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
