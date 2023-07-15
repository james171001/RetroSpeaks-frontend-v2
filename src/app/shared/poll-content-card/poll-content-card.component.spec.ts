import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollContentCardComponent } from './poll-content-card.component';

describe('PollContentCardComponent', () => {
  let component: PollContentCardComponent;
  let fixture: ComponentFixture<PollContentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PollContentCardComponent]
    });
    fixture = TestBed.createComponent(PollContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
