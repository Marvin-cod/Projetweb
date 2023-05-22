import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StatistiquesEventComponent} from './statistiques-event.component';

describe('StatistiquesEventComponent', () => {
  let component: StatistiquesEventComponent;
  let fixture: ComponentFixture<StatistiquesEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatistiquesEventComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(StatistiquesEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
