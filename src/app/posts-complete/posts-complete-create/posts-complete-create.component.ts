import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { PostDto } from 'src/app/postDto';

@Component({
  selector: 'app-posts-complete-create',
  templateUrl: './posts-complete-create.component.html',
  styleUrls: ['./posts-complete-create.component.css']
})
export class PostsCompleteCreateComponent implements OnInit {

  constructor(
    private router: Router, 
    private service: PostService) { }

  ngOnInit(): void {
  }

  saveChanges(postDto: PostDto){
    this.service.create(postDto).subscribe((response) => {
      this.router.navigate(['posts-complete']);
    });
  }
}
