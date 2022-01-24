import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealAdderComponent } from 'src/meal-adder/meal-adder.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'add-meal', component: MealAdderComponent},
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
