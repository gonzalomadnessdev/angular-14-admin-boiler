import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoIndividualCardComponent } from './dato-individual-card.component';

describe('DatoIndividualCardComponent', () => {
  let component: DatoIndividualCardComponent;
  let fixture: ComponentFixture<DatoIndividualCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoIndividualCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatoIndividualCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
