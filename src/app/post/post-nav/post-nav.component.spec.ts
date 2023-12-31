import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNavComponent } from './post-nav.component';

describe('PostNavComponent', () => {
  let component: PostNavComponent;
  let fixture: ComponentFixture<PostNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostNavComponent]
    });
    fixture = TestBed.createComponent(PostNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
