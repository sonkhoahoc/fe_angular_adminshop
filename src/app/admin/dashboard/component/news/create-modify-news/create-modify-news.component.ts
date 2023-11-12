import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/model/news.model';
import { CategoryNewsService } from 'src/app/services/category-news/category-news.service';
import { NewsService } from 'src/app/services/news/news.service';

@Component({
  selector: 'app-create-modify-news',
  templateUrl: './create-modify-news.component.html',
  styleUrls: ['./create-modify-news.component.css']
})
export class CreateModifyNewsComponent implements OnInit {

  newss: any;
  categories: any;
  news: News = {
    id: 0,
    category_id: 0,
    title: '',
    short_description: '',
    content: '',
    avatar: '',
    note: '',
    is_delete: true,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date(),
    dateUpdated: new Date()
  }
  cateId: number;
  is_Edit: boolean = false;
  id: number | null = null;
  selectImg: string = ''

  constructor(
    private newsSer: NewsService,
    private cateSer: CategoryNewsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.is_Edit = !!this.id;

    this.cateSer.getListCategory_news().subscribe((res: any) =>{
      this.categories = res.data;
    });

    if(this.is_Edit){
      this.newsSer.getNewsById(this.id).subscribe((res: any) =>{
        this.newss = res.data;
      });
    }
  }

  onSubmit(){
    if(this.is_Edit && this.id !== null){
      this.newsSer.updateNews(this.id, this.news).subscribe((res) =>{
        this.router.navigate(['/admin/news']);
      });
    } else {
      this.newsSer.createNews(this.news).subscribe((res) =>{
        this.router.navigate(['/admin/news']);
      });
    }
  }

  onSelectFimatLine(event: any){
    const file = event.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onload = (e) =>{
        this.news.avatar = e.target.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

}
