import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompleteCreateComponent } from './posts-complete-create.component';

describe('PostsCompleteCreateComponent', () => {
  let component: PostsCompleteCreateComponent;
  let fixture: ComponentFixture<PostsCompleteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCompleteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompleteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
