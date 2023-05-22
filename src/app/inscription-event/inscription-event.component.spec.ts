import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InscriptionEventComponent} from './inscription-event.component';

describe('InscriptionEventComponent', () => {
  let component: InscriptionEventComponent;
  let fixture: ComponentFixture<InscriptionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionEventComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InscriptionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
