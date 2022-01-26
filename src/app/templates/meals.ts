import { Meal } from "src/app/templates/Meal";
import { mealTime } from "./mealTimes";

export const MEALS: Meal[] = [
  {
    name: "Spag bol",
    date: new Date(1997, 2, 2),
    time: mealTime.Lunch
  },
  {
    "name": "Curry",
    date: new Date(1997, 2, 5),
    time: mealTime.Lunch
  }
]