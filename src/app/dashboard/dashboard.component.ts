import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal-service.service';
import { Meal } from '../templates/Meal';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  meals: Meal[] = []

  constructor(private mealService: MealService) { }

  ngOnInit() {
    this.getMeals()
  }

  getMeals(): void {
    this.mealService.getMeals()
      .subscribe(meals => this.meals = meals)
  }

}
