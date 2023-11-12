/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Product_fileComponent } from './product_file.component';

describe('Product_fileComponent', () => {
  let component: Product_fileComponent;
  let fixture: ComponentFixture<Product_fileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product_fileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product_fileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
