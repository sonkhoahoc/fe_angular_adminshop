import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModifySliderComponent } from './create-modify-slider.component';

describe('CreateModifySliderComponent', () => {
  let component: CreateModifySliderComponent;
  let fixture: ComponentFixture<CreateModifySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModifySliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateModifySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
