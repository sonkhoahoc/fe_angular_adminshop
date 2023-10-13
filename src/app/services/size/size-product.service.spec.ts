/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SizeProductService } from './size-product.service';

describe('Service: SizeProduct', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SizeProductService]
    });
  });

  it('should ...', inject([SizeProductService], (service: SizeProductService) => {
    expect(service).toBeTruthy();
  }));
});
