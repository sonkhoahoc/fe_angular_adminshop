import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { News } from 'src/app/model/news.model';
import { CategoryNewsService } from 'src/app/services/category-news/category-news.service';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any = [];
  cates: any = [];

  searchText: string = '';
  reloadNews: News[] = [];

  constructor(
    private newsSer: NewsService,
    private cateSer: CategoryNewsService,
    private messSer: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.newsSer.getListNews().subscribe((res: any) =>{
      this.news = res.data;
      this.reloadNews = [...this.news];

      this.cateSer.getListCategory_news().subscribe((res: any) =>{
        this.cates = res.data;
        this.news.forEach((_news) =>{
          const category = this.cates.find((n) => n.id === _news.category_id);
          if(category){
            _news.category_id = category.name;
          }
        });
      });
    });
  }

  deleteNews(id: number){
    this.newsSer.deleteNews(id).subscribe((res) =>{
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
        detail: 'Xóa thất bại, vui lòng thử lại!!!'
      });
    });
  }

  onAdd(){
    this.router.navigate(['/admin/news/create']);
  }

  onEdit(id: number){
    this.router.navigate([`/admin/news/edit/${id}`]);
  }

}
