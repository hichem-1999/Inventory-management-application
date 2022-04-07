import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCommandeVenteComponent } from './ajout-commande-vente.component';

describe('AjoutCommandeVenteComponent', () => {
  let component: AjoutCommandeVenteComponent;
  let fixture: ComponentFixture<AjoutCommandeVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCommandeVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCommandeVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
