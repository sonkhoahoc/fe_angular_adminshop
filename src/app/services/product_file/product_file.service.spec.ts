/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Product_fileService } from './product_file.service';

describe('Service: Product_file', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Product_fileService]
    });
  });

  it('should ...', inject([Product_fileService], (service: Product_fileService) => {
    expect(service).toBeTruthy();
  }));
});
