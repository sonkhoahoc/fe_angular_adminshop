import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category_News } from 'src/app/model/category-news.model';

import { CategoryNewsService } from 'src/app/services/category-news/category-news.service';

@Component({
  selector: 'app-create-modify-category-news',
  templateUrl: './create-modify-category-news.component.html',
  styleUrls: ['./create-modify-category-news.component.css']
})
export class CreateModifyCategoryNewsComponent implements OnInit {

  category: Category_News = {
    id: 0,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date(),
    dateUpdated: new Date(),
    name: '',
    is_delete: true
  };
  isEdit: boolean;
  id: number;

  constructor(
    private cateSer: CategoryNewsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];

    if(this.id){
      this.isEdit = true;
      this.cateSer.getCategory_newsbyId(this.id).subscribe((res) =>{
        this.category = res;
      });
    }
  }

  onSave(){
    if(this.isEdit && this.id !== 0){
      this.cateSer.updateCategory_news(this.id, this.category).subscribe((res) =>{
        this.router.navigate(['admin/category-news']);
      });
    }
    else{
      this.cateSer.createCategory_news(this.category).subscribe((res) =>{
        this.router.navigate(['admin/category-news']);
      });
    }
  }

}
