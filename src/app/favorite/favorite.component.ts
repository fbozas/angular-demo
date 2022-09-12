import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  isFavorite: boolean = true;
  constructor() { }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
  ngOnInit(): void {
  }

}
