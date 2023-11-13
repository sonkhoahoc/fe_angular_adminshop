import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/model/product.model';
import { Size } from 'src/app/model/size.model';
import { ProductService } from 'src/app/services/product/product.service';
import { SizeProductService } from 'src/app/services/size/size-product.service';

@Component({
  selector: 'app-size-product',
  templateUrl: './size-product.component.html',
  styleUrls: ['./size-product.component.css']
})
export class SizeProductComponent implements OnInit {

  sizes: any = [];
  products: any = [];

  constructor(
    private sizeSer: SizeProductService,
    private proSer: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private messSer: MessageService
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.sizeSer.getlistSize().subscribe((res: any) =>{
      this.sizes = res.data;

      this.proSer.getListProduct().subscribe((res: any) =>{
        this.products = res.data;
        this.sizes.forEach((size) => {
          const product = this.products.find((p) => p.id === size.product_id);
          if (product) {
            size.product_id = product.name; // Gán tên sản phẩm vào product_id
          }
        });
      });
    });
  }

  deleteSize(id: number){
    this.sizeSer.dedeleeteeSize(id).subscribe((res) =>{
      this.messSer.add({
        severity: 'success',
        summary: 'Thành công',
        detail: 'Xóa thành công!!!'
      });
      window.location.reload();
    }, (error) =>{
      this.messSer.add({
        severity: 'error',
        summary: 'Thất  bại',
        detail: 'Xóa không thành công, vui lòng thực hiện lại!!!'
      });
    });
  }

  onAdd(){
    this.router.navigate(['/admin/size/create'])
  }

  onEdit(id: number){
    this.router.navigate([`/admin/size/edit/${id}`]);
  }

}
