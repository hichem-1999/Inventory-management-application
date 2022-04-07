import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeAchatComponent } from './liste-commande-achat.component';

describe('ListeCommandeAchatComponent', () => {
  let component: ListeCommandeAchatComponent;
  let fixture: ComponentFixture<ListeCommandeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommandeAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
