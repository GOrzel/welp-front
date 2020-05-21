import { TestBed } from '@angular/core/testing';

import { FoodPlacesService } from './food-places.service';

describe('FoodPlacesService', () => {
  let service: FoodPlacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodPlacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
