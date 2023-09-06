import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Message, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { Category_News } from 'src/app/model/category-news.model';

import { CategoryNewsService } from 'src/app/services/category-news/category-news.service';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent implements OnInit {

  categories: Category_News[] = [];
  searchText: string = '';

  constructor(
    private cateSer: CategoryNewsService,
    private messSer: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.cateSer.getListCategory_news().subscribe((res: any) =>{
      this.categories = res.data;
      console.log('dddd', res.data)
    });
  }

  deleteCate(id: number){
    this.cateSer.deleteCategory_news(id).subscribe((res) =>{
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

  onSearch(){
    if(this.searchText){
      this.categories = this.categories.filter((res) =>
        res.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else{
      this.getList();
    }
  }

  onAdd(){
    this.router.navigate(['/admin/category-news/create']);
  }

  onEdit(id: number){
    this.router.navigate([`/admin/category-news/edit/${id}`]);
  }

}
