import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Voucher } from 'src/app/model/voucher.model';
import { VoucherService } from 'src/app/services/voucher/voucher.service';

@Component({
  selector: 'app-create-modify-voucher',
  templateUrl: './create-modify-voucher.component.html',
  styleUrls: ['./create-modify-voucher.component.css']
})
export class CreateModifyVoucherComponent implements OnInit {

  vouchers: any = [];
  voucher: Voucher = {
    id: 0,
    name: '',
    code: '',
    is_apply_count: true,
    max_apply_count: 0,
    discount_cash: 0,
    type: ''
  };
  id: number | null = null;
  is_Edit: boolean = false;

  constructor(
    private voucherSer: VoucherService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.is_Edit = !!this.id;

    if(this.is_Edit){
      this.voucherSer.getVoucherbyId(this.id).subscribe((res: any) =>{
        this.voucher = res.data;
      })
    }
  }

  onSubmit(){
    if(this.is_Edit && this.id !== null){
      this.voucherSer.updateVoucher(this.id, this.voucher).subscribe((res) =>{
        this.router.navigate(['../../admin/voucher']);
      })
    } else{
      this.voucherSer.createVoucher(this.voucher).subscribe((res) =>{
        this.router.navigate(['../../admin/voucher']);
      })
    }
  }

}
