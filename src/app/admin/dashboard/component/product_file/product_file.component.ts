import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product_fileService } from 'src/app/services/product_file/product_file.service';

@Component({
  selector: 'app-product_file',
  templateUrl: './product_file.component.html',
  styleUrls: ['./product_file.component.css']
})
export class Product_fileComponent implements OnInit {

  product_file: any = [];
  pro: any = [];

  constructor(
    private pro_fileSer: Product_fileService,
    private proSer: ProductService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getList()
  }

  getList(){
    this.pro_fileSer.getListProduct_File().subscribe((res: any) =>{
      this.product_file = res.data;

      this.proSer.getListProduct().subscribe((res: any) =>{
        this.pro = res.data;
        console.log('dd',res.data);
        this.product_file.forEach((products) =>{
          const product = this.pro.find((p) => p.id === products.product_id);
          if(product){
            products.product_id = product.name;
          }
        });
      });
    });
  }

  deleteProduct_file(id: number){
    this.pro_fileSer.deleteProduct_File(id).subscribe((res) =>{
      window.location.reload();
    })
  }

  onAdd(){
    this.router.navigate(['/admin/product-file/create']);
  }

  onEdit(id:number){
    this.router.navigate([`/admin/product-file/edit/${id}`]);
  }

}
