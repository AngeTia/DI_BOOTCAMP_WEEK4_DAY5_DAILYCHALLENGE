import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipeInformation() {
    return this.http.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information", {
    });
  }


}
