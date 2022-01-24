/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MealService } from './meal-service.service';

describe('Service: MealService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MealService]
    });
  });

  it('should ...', inject([MealService], (service: MealService) => {
    expect(service).toBeTruthy();
  }));
});
