/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SizeProductComponent } from './size-product.component';

describe('SizeProductComponent', () => {
  let component: SizeProductComponent;
  let fixture: ComponentFixture<SizeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
