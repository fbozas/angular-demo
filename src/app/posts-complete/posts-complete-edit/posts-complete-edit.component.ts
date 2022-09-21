import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { PostDto } from 'src/app/postDto';

@Component({
  selector: 'app-posts-complete-edit',
  templateUrl: './posts-complete-edit.component.html',
  styleUrls: ['./posts-complete-edit.component.css']
})
export class PostsCompleteEditComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute, 
    private service: PostService,
    private router: Router) { }

  model: PostDto;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
        this.service.get(params['id']).subscribe(post => {
          this.model = post;
        })
    })
  }

  saveChanges(postDto: PostDto){
    this.service.update(postDto).subscribe(response => {
      console.log(response);
      this.router.navigate(['posts-complete']);
    });
  }
}
