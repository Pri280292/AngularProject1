import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
   recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test',
    'https://static.onecms.io/wp-content/uploads/sites/19/2011/04/14/sweet-tea-brined-chicken-sl.jpg'),
    new Recipe('A Test Recipe','This is simply a test',
    'https://static.onecms.io/wp-content/uploads/sites/19/2011/04/14/sweet-tea-brined-chicken-sl.jpg')
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
