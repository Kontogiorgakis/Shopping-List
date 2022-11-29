import { Component, OnInit } from '@angular/core';
import {faFaceMeh} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faFaceMeh = faFaceMeh;
}
