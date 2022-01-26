import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MealService } from 'src/app/services/meal-service.service';
import { Meal } from 'src/app/templates/Meal';
import { mealTime } from 'src/app/templates/mealTimes';

@Component({
  selector: 'app-meal-adder',
  templateUrl: './meal-adder.component.html',
  styleUrls: ['./meal-adder.component.css']
})
export class MealAdderComponent implements OnInit {

  mealOptions = Object.values(mealTime)

  addMealForm = this.fb.group({
    mealName: "",
    date: new Date(),
    time: mealTime.PreBreakfastSnack
  })

  constructor(
    private fb: FormBuilder,
    private mealService: MealService) { }

  ngOnInit() {
  }

  onSubmit() {
    const value = this.addMealForm.value
    const meal: Meal = {
      name: value.mealName,
      date: value.date,
      time: value.time
    }
    this.mealService.addMeal(meal)
    this.clearForm()
  }

  clearForm() {
    this.addMealForm.reset()
  }

}
