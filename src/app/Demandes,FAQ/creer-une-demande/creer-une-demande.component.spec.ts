import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUneDemandeComponent } from './creer-une-demande.component';

describe('CreerUneDemandeComponent', () => {
  let component: CreerUneDemandeComponent;
  let fixture: ComponentFixture<CreerUneDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerUneDemandeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerUneDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
