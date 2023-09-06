/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryProductService } from './category-product.service';

describe('Service: CategoryProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryProductService]
    });
  });

  it('should ...', inject([CategoryProductService], (service: CategoryProductService) => {
    expect(service).toBeTruthy();
  }));
});
