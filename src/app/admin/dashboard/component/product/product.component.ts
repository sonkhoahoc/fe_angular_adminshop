// product.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product/product.service';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pros: any = [];
  cates: any = [];

  searchText: string = '';
  originalCategories: Product[] = [];

  constructor(
    private proSer: ProductService,
    private cateSer: CategoryProductService,
    private messSer: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.proSer.getListProduct().subscribe((res: any) => {
      this.pros = res.data;
      this.originalCategories = [...this.pros]

      this.cateSer.getlistCategory_product().subscribe((res: any) => {
        this.cates = res.data;
        this.pros.forEach((product) => {
          const category = this.cates.find((c) => c.id === product.category_id);
          if (category) {
            product.category_id = category.name;
          }
        });
      });
    });
  }

  deleteProduct(id: number) {
    this.proSer.deleteProduct(id).subscribe((res) => {
      this.messSer.add({
        severity: 'success',
        summary: 'Thành công',
        detail: 'Xóa thành công!!!'
      });
      window.location.reload();
    }, (error) => {
      this.messSer.add({
        severity: 'error',
        summary: 'Thất bại',
        detail: 'Xóa thất bại, vui lòng thử lại!!!'
      });
    });
  }

  onSearch() {
    if (this.searchText) {
      this.pros = this.originalCategories.filter((res) =>
        res.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.pros = [...this.originalCategories];
    }
  }

  onAdd(){
    this.router.navigate(['/admin/product/create']);
  }

  onEdit(id: number){
    this.router.navigate([`/admin/product/edit/${id}`]);
  }
}
