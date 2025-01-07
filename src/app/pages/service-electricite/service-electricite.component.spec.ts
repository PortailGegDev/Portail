import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceElectriciteComponent } from './service-electricite.component';

describe('ServiceElectriciteComponent', () => {
  let component: ServiceElectriciteComponent;
  let fixture: ComponentFixture<ServiceElectriciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceElectriciteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceElectriciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
