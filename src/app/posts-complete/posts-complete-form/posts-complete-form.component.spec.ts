import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompleteFormComponent } from './posts-complete-form.component';

describe('PostsCompleteFormComponent', () => {
  let component: PostsCompleteFormComponent;
  let fixture: ComponentFixture<PostsCompleteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCompleteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
