import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDeResiliationEnCoursComponent } from './demande-de-resiliation-en-cours.component';

describe('DemandeDeResiliationEnCoursComponent', () => {
  let component: DemandeDeResiliationEnCoursComponent;
  let fixture: ComponentFixture<DemandeDeResiliationEnCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeDeResiliationEnCoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeDeResiliationEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
