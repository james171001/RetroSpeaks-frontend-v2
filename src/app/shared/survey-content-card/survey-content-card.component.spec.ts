import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyContentCardComponent } from './survey-content-card.component';

describe('SurveyContentCardComponent', () => {
  let component: SurveyContentCardComponent;
  let fixture: ComponentFixture<SurveyContentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyContentCardComponent]
    });
    fixture = TestBed.createComponent(SurveyContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
