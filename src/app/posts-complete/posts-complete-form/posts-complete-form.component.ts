import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostDto } from 'src/app/postDto';

@Component({
  selector: 'app-posts-complete-form',
  templateUrl: './posts-complete-form.component.html',
  styleUrls: ['./posts-complete-form.component.css']
})
export class PostsCompleteFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: PostDto;

  @Output()
  onSaveChanges = new EventEmitter<PostDto>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required]
    })

    if(this.model != undefined){
      this.form.patchValue(this.model);
    }else{
      this.form.controls['id'].setValue(0);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

}
