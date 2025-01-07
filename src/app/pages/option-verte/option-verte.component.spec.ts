import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionVerteComponent } from './option-verte.component';

describe('OptionVerteComponent', () => {
  let component: OptionVerteComponent;
  let fixture: ComponentFixture<OptionVerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionVerteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionVerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
