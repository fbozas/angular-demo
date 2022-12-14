import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;
  

  constructor(private service: PostService) { 
  }

  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value = '';
    this.service.create(post)
    .subscribe(response => {
      this.loadPosts();
      console.log(response);
    })
  }

  updatePost(post:any){
    console.log(post);   
    post.title += ' Updated'; 
      this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post: any){    
    this.service.delete(post.id)
      .subscribe(response =>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
    });
  }

  loadPosts(){
    this.service.getAll()
    .subscribe(response =>{
        this.posts = response;
    });
  }

  ngOnInit(): void {
    this.loadPosts();
  }

}
