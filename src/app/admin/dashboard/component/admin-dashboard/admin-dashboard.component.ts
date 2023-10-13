import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  totalProduct: number;

  constructor(
    private proSer: ProductService
  ) {}

  ngOnInit(): void{
    this.getTotalProduct();
  }

  getTotalProduct() {
    this.proSer.getTotalProduct().subscribe((res: any) =>{
        this.totalProduct = res.data;
        console.log('total', this.totalProduct);
      },
      (error) => {
        console.error('Error fetching total product count:', error);
      }
    );
  }

}
