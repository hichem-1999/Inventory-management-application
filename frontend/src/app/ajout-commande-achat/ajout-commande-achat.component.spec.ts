import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCommandeAchatComponent } from './ajout-commande-achat.component';

describe('AjoutCommandeAchatComponent', () => {
  let component: AjoutCommandeAchatComponent;
  let fixture: ComponentFixture<AjoutCommandeAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCommandeAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCommandeAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
