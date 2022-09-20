import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCompleteEditComponent } from './posts-complete-edit.component';

describe('PostsCompleteEditComponent', () => {
  let component: PostsCompleteEditComponent;
  let fixture: ComponentFixture<PostsCompleteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsCompleteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCompleteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
