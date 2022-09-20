import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { PostDto } from 'src/app/postDto';

@Component({
  selector: 'app-posts-complete-index',
  templateUrl: './posts-complete-index.component.html',
  styleUrls: ['./posts-complete-index.component.css']
})
export class PostsCompleteIndexComponent implements OnInit {

  posts: any;
  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(){
    this.service.getAll().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    })
  }

  delete(post: PostDto){
    
  }

}
