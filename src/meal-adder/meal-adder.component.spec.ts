/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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

    it('should submit matching empty meal', async (() => {
      //Get values and matching object of new meal
      //Add new meals into form
      //Hit submit
      console.log('here')
      const submitButton = fixture.debugElement.nativeElement.querySelector('.submit-button')
      // submitButton.triggerEventHandler('click', null)

      let dateBefore = component.addMealForm.get('date')?.value

      submitButton.click()
      // fixture.detectChanges()

      //Expect onSubmit() to be called with empty meal
      fixture.whenStable().then(() => {
        expect(mockMealService.addMeal).toHaveBeenCalled() //todo: add with
        let date = component.addMealForm.get('date')?.value
        expect(date).toBe(null)
      })
    }))
  })

});
