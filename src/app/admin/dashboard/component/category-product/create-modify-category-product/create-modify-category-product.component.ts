import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Category_Product } from 'src/app/model/category-product.model';

import { CategoryProductService } from 'src/app/services/category-product/category-product.service';

@Component({
  selector: 'app-create-modify-category-product',
  templateUrl: './create-modify-category-product.component.html',
  styleUrls: ['./create-modify-category-product.component.css']
})
export class CreateModifyCategoryProductComponent implements OnInit {

  category: Category_Product = {
    id: 0,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date(),
    dateUpdated: new Date(),
    name: '',
    is_delete: true
  };
  idEdit: boolean;
  id: number

  constructor(
    private cateSer: CategoryProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   this.id = +this.route.snapshot.params['id'];

    if(this.id){
      this.idEdit = true;
      this.cateSer.getCategory_productbyId(this.id).subscribe((res) =>{
        this.category = res
      });
    }
  }

  onSave(){
    if(this.idEdit && this.id !== 0){
      this.cateSer.updateCategory_product(this.id, this.category).subscribe((res) =>{
        this.router.navigate(['admin/category-product']);
      });
    }
    else{
      this.cateSer.createCategory_product(this.category).subscribe((res) =>{
        this.router.navigate(['admin/category-product']);
      });
    }
  }

  onCancel(){
    this.router.navigate(['admin/category-product']);
  }

}
