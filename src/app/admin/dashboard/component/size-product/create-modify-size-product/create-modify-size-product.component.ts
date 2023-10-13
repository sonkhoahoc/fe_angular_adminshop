import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { Size } from 'src/app/model/size.model';
import { ProductService } from 'src/app/services/product/product.service';
import { SizeProductService } from 'src/app/services/size/size-product.service';

@Component({
  selector: 'app-create-modify-size-product',
  templateUrl: './create-modify-size-product.component.html',
  styleUrls: ['./create-modify-size-product.component.css']
})
export class CreateModifySizeProductComponent implements OnInit {

  products: any;
  sizes: any;
  size: any = {
    id: 0,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date(),
    dateUpdated: new Date(),
    is_delete: false,
    product_id: null,
    name: '',
    quantity: 0
  };
  productId: number;
  isEdit: boolean = false;
  id: number | null = null;

  constructor(
    private sizeSer: SizeProductService,
    private proSer: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.isEdit = !!this.id;

    // Lấy danh sách sản phẩm để hiển thị trong dropdown
    this.proSer.getListProduct().subscribe((res: any) => {
      this.products = res.data;
    });

    if (this.isEdit) {
      // Nếu đang chỉnh sửa, lấy thông tin kích thước cần sửa
      this.sizeSer.getSizebyId(this.id!).subscribe((res: any) => {
        this.size = res.data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit && this.id !== null) {
      // Sửa kích thước
      this.sizeSer.updateSize(this.id, this.size).subscribe(() => {
        this.router.navigate(['/admin/size']);
      });
    } else {
      // Thêm mới kích thước
      this.sizeSer.createSize(this.size).subscribe(() => {
        this.router.navigate(['/admin/size']);
      });
    }
  }

}
