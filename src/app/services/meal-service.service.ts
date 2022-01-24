import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MEALS } from 'src/assets/meals';
import { Meal } from '../templates/Meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor() { }

  getMeals(): Observable<Meal[]> {
    return of(MEALS)
  }

  addMeal(meal: Meal): void {
    console.log(meal)
  }

}
