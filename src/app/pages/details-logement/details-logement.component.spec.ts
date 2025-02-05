import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLogementComponent } from './details-logement.component';

describe('DetailsLogementComponent', () => {
  let component: DetailsLogementComponent;
  let fixture: ComponentFixture<DetailsLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsLogementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
