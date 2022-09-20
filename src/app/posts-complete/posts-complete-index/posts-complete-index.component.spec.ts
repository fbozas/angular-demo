import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompleteIndexComponent } from './posts-complete-index.component';

describe('PostsCompleteIndexComponent', () => {
  let component: PostsCompleteIndexComponent;
  let fixture: ComponentFixture<PostsCompleteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCompleteIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompleteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
