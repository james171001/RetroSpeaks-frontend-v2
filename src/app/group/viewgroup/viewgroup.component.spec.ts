import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgroupComponent } from './viewgroup.component';

describe('ViewgroupComponent', () => {
  let component: ViewgroupComponent;
  let fixture: ComponentFixture<ViewgroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewgroupComponent]
    });
    fixture = TestBed.createComponent(ViewgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
