import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CategoryProductService } from 'src/app/services/category-product/category-product.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-modify-product',
  templateUrl: './create-modify-product.component.html',
  styleUrls: ['./create-modify-product.component.css']
})
export class CreateModifyProductComponent implements OnInit {

  products: any;
  categories: any;
  product: Product = {
    id: 0,
    category_id: 0,
    name: '',
    price: 0,
    views_count: 0,
    stock_quantity: 0,
    sold_quantity: 0,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date(),
    dateUpdated: new Date(),
    description: '',
    is_delete: false,
    avatar: ''
  };
  cateId: number;
  is_Edit: boolean = false;
  id: number | null = null;
  selectImg: string = '';

  //Validator
  isSubmitted: boolean = false;
  validationErrors: string[] = [];

  constructor(
    private proSer: ProductService,
    private cateSer: CategoryProductService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.is_Edit = !! this.id;

    //Lấy danh sách loại sản phẩm để select
    this.cateSer.getlistCategory_product().subscribe((res: any) =>{
      this.categories = res.data;
    });

    if(this.is_Edit){
      this.proSer.getProductById(this.id!).subscribe((res: any) =>{
        this.products = res.data;
      });
    }
  }

  onSubmit() {

    this.isSubmitted = true;

    this.validationErrors = [];
    if(!this.product.category_id){
      this.validationErrors.push('Vui lòng chọn loại sản phẩm!!!');
    }
    if(!this.product.name){
      this.validationErrors.push('Vui lòng không để tên sản phẩm trống!!!');
    }
    if(!this.product.price){
      this.validationErrors.push('Vui lòng không để giá sản phẩm!!!');
    } else if(this.product.price < 0){
      this.validationErrors.push('Giá sản phẩm không được là giá âm!!!');
    }
    if(!this.product.description){
      this.validationErrors.push('Vui lòng không để mô tả sản phẩm trống!!!');
    }

    if(this.validationErrors.length > 0){
      return
    }


    if (this.is_Edit && this.id !== null) {
      // Nếu đang chỉnh sửa, gửi yêu cầu cập nhật
      this.proSer.updateProduct(this.id, this.product).subscribe(() => {
        this.router.navigate(['/admin/product']);
      });
    } else {
      // Nếu đang thêm mới, gửi yêu cầu thêm mới
      this.proSer.createProduct(this.product).subscribe(() => {
        this.router.navigate(['/admin/product']);
      });
    }
  }


  onSelectFile(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.product.avatar = file.name;
    }
  }
}
