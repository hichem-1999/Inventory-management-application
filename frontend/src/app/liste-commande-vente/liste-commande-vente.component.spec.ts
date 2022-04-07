import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeVenteComponent } from './liste-commande-vente.component';

describe('ListeCommandeVenteComponent', () => {
  let component: ListeCommandeVenteComponent;
  let fixture: ComponentFixture<ListeCommandeVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommandeVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
