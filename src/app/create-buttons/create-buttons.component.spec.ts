import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateButtonsComponent } from './create-buttons.component';

describe('CreateButtonsComponent', () => {
  let component: CreateButtonsComponent;
  let fixture: ComponentFixture<CreateButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateButtonsComponent]
    });
    fixture = TestBed.createComponent(CreateButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
