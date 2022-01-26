/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule, By } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { MealService } from 'src/app/services/meal-service.service';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { Meal } from 'src/app/templates/Meal';
import { MEALS } from 'src/app/templates/meals';
import { mealTime } from 'src/app/templates/mealTimes';

import { MealAdderComponent } from './meal-adder.component';

describe('MealAdderComponent', async () => {
  let component: MealAdderComponent
  let fixture: ComponentFixture<MealAdderComponent>
  let mockMealService: jasmine.SpyObj<MealService>

  beforeEach(() => {
    mockMealService = jasmine.createSpyObj('MealService', ['addMeal'])

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MealAdderComponent,
        NavBarComponent,
        DashboardComponent,
        // MEALS
      ],
      imports: [
        AppRoutingModule,
        NoopAnimationsModule,
        FormsModule,
    	  ReactiveFormsModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        MatSelectModule,
        RouterTestingModule
      ],
      providers: [{ provide: MealService, useValue: mockMealService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form', async () => {

    // Poor practice to test two things in one test but can't be bothered to change this
    it('should call add meal function and reset form', waitForAsync(() => {
      const submitButton = fixture.debugElement.nativeElement.querySelector('.submit-button')

      submitButton.click()

      //Expect onSubmit() to be called with empty meal
      fixture.whenStable().then(() => {
        expect(mockMealService.addMeal).toHaveBeenCalled() //todo: add with
        let date = component.addMealForm.get('date')?.value
        expect(date).toBe(null)
      })
    }))

    //todo: sort it out
    xit('should submit matching meal', waitForAsync(() => {
      const dateToInput = new Date()
      const nameToInput = 'name'
      const submitButton = fixture.debugElement.nativeElement.querySelector('.submit-button')
      const nameInput = fixture.debugElement.nativeElement.querySelector('#meal-name')
      const dateInput = fixture.debugElement.nativeElement.querySelector('.dateInput')
      // const timeOptions todo

      nameInput.value = nameToInput
      dateInput.value = dateToInput

      submitButton.click()

      fixture.whenStable().then(() => {
        const mealToCompare: Meal = {
          name: nameToInput,
          date: dateToInput,
          time: mealTime.PreBreakfastSnack // todo select this
        }

        expect(mockMealService.addMeal).toHaveBeenCalledWith(mealToCompare)
      })
    }))
  })

});
