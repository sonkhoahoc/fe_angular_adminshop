import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Slider } from 'src/app/model/slider.model';
import { SliderService } from 'src/app/services/slider/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slider: Slider[] = [];
  searchText: string = '';

  constructor(
    private sliderSer: SliderService,
    private router: Router,
    private messSer: MessageService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.sliderSer.getListSlider().subscribe((res: any) =>{
      this.slider = res.data;
    });
  }

  deleteSlider(id: number){
    this.sliderSer.deleteSlider(id).subscribe((res) =>{
      this.messSer.add({
        severity: 'success',
        summary: 'Thành công',
        detail: 'Xóa thành công!!!'
      });
      window.location.reload();
    }, (error) =>{
      this.messSer.add({
        severity: 'error',
        summary: 'Thất bại',
        detail: 'Xóa không thành công vui lòng thử lại!!!'
      });
    });
  }

  onCreate(){
    this.router.navigate(['admin/slider/create']);
  }

  onEdit(id: number){
    this.router.navigate([`admin/slider/edit/${id}`]);
  }
}
