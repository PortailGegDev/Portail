import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeResiliationComponent } from './demande-de-resiliation.component';

describe('DemandeDeResiliationComponent', () => {
  let component: DemandeDeResiliationComponent;
  let fixture: ComponentFixture<DemandeDeResiliationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeDeResiliationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDeResiliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
