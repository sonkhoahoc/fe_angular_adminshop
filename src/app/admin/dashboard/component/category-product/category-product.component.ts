import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Table } from 'primeng/table';
import { Message, MessageService } from 'primeng/api';

import { CategoryProductService } from 'src/app/services/category-product/category-product.service';

import { Category_Product } from 'src/app/model/category-product.model';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  categories: Category_Product[] = [];
  searchText: string = '';

  originalCategories: Category_Product[] = [];

  constructor(private cateSer: CategoryProductService,
              private messSer: MessageService,
              private router: Router
  ) { }

  ngOnInit() {
    this.getlist();
  }

  getlist(){
    this.cateSer.getlistCategory_product().subscribe((res: any) =>{
      this.categories = res.data;

      this.originalCategories = [...this.categories]

      this.categories.forEach((category) =>{
        const parent = this.categories.find((c) => c.id === category.parent_category_id);
        if(parent){
          category.parent_category_id = parent.name;
        }
      })
    });
  }

  deleteCate(id: number){
    this.cateSer.deleteCategory_product(id).subscribe((res) =>{
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
        detail: 'Xóa không thành công vui lòng thử lại!!!'
      });
    });
  }

  onSearch() {
    if (this.searchText) {
      this.categories = this.originalCategories.filter((res) =>
        res.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.categories = [...this.originalCategories];
    }
  }

  onAdd() {
    this.router.navigate(['admin/category-product/create']);
  }

  onEdit(id: number) {
    this.router.navigate([`admin/category-product/edit/${id}`]);
  }

}
