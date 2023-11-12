import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Slider } from 'src/app/model/slider.model';

import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-create-modify-slider',
  templateUrl: './create-modify-slider.component.html',
  styleUrls: ['./create-modify-slider.component.css']
})
export class CreateModifySliderComponent {

  id: number;
  slider: Slider = {
    id: 0,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date,
    dateUpdated: new Date,
    is_delete: true,
    url: '',
    note: '',
  };
  isEdit: boolean;
  selectedImageUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sliderSer: SliderService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];

    if(this.id){
      this.isEdit = true;
      this.sliderSer.getSliderbyId(this.id).subscribe((res) =>{
        this.slider = res
      });
    }
  }

  onSave(){
    if(this.isEdit && this.id !== 0){
      this.sliderSer.updateSlider(this.id, this.slider).subscribe((res) =>{
        this.router.navigate(['admin/slider']);
      });
    }
    else{
      this.sliderSer.createSlider(this.slider).subscribe((res) =>{
        this.router.navigate(['admin/slider']);
      });
    }
  }

  onSelectFimatLine(event: any){
    const file = event.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onload = (e) =>{
        this.slider.url = e.target.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
