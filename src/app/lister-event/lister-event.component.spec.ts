import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListerEventComponent} from './lister-event.component';

describe('ListerEventComponent', () => {
  let component: ListerEventComponent;
  let fixture: ComponentFixture<ListerEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListerEventComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListerEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
