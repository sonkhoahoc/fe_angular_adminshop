/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryNewsService } from './category-news.service';

describe('Service: CategoryNews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryNewsService]
    });
  });

  it('should ...', inject([CategoryNewsService], (service: CategoryNewsService) => {
    expect(service).toBeTruthy();
  }));
});
