import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPost(post: any){
    return this.http.post(this.url,post);
  }

  updatePost(post: any){
    return this.http.patch(`${this.url}/${post.id}`, {isRead:true});
  }

  deletePost(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
