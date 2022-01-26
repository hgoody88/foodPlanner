import { mealTime } from "src/app/templates/mealTimes";

export interface Meal {
  name: string,
  date: Date,
  time: mealTime
}