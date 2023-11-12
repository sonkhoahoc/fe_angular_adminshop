import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoucherService } from 'src/app/services/voucher/voucher.service';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {

  voucher: any = [];

  constructor(
    private voucherSer: VoucherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.voucherSer.getList().subscribe((res: any) =>{
      this.voucher  = res.data;
      console.log('voucher', res.data);
    })
  }

  deleteVoucher(id: number){
    this.voucherSer.deleteVoucher(id).subscribe((res) =>{
      window.location.reload();
    });
  }

  onAdd(){
    this.router.navigate(['../../admin/voucher/create']);
  }

  onEdit(id: number){
    this.router.navigate([`../../admin/voucher/edit/${id}`]);;
  }
}
