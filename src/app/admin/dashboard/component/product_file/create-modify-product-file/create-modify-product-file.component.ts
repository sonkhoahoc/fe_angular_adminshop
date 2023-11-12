import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product_File } from 'src/app/model/product_file.model';
import { ProductService } from 'src/app/services/product/product.service';
import { Product_fileService } from 'src/app/services/product_file/product_file.service';

@Component({
  selector: 'app-create-modify-product-file',
  templateUrl: './create-modify-product-file.component.html',
  styleUrls: ['./create-modify-product-file.component.css']
})
export class CreateModifyProductFileComponent implements OnInit {

  product_files: any = [];
  product: any = [];
  product_file: Product_File = {
    id: 0,
    product_id: 0,
    alt_description: '',
    is_delete: true,
    userAdded: 0,
    userUpdated: 0,
    dateAdded: new Date(),
    dateUpdated: new Date(),
    file: ''
  };
  proId: number;
  is_Edit: boolean = false;
  id: number | null = null;
  selectImg: string = '';

  constructor(
    private pro_fileSer: Product_fileService,
    private proSer: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.is_Edit = !!this.id;

    this.proSer.getListProduct().subscribe((res: any) =>{
      this.product = res.data;
    });

    if(this.is_Edit){
      this.pro_fileSer.getProduct_FilebyId(this.id).subscribe((res: any) =>{
        this.product_files = res.data;
      });
    }
  };

  onSubmit(){
    if(this.is_Edit && this.id !== null){
      this.pro_fileSer.updateProduct_File(this.id, this.product_file).subscribe((res) =>{
        this.router.navigate(['/admin/product-file']);
      });
    } else{
      this.pro_fileSer.createProduc_File(this.product_file).subscribe((res) =>{
        this.router.navigate(['/admin/product-file']);
      });
    }
  };

  onSelectFile(event: any){
    const file = event.target.files[0];

    if(file){
      const reader = new FileReader();

      reader.onload = (e) =>{
        console.log('test' ,e.target?.result);
        this.product_file.file = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    };
  };

}
