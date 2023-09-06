import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message, MessageService } from 'primeng/api';

import { UserService } from '../services/user/user.service';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm: FormGroup;
  mess: Message[] = [];

  showPassword: boolean = false;

  errorMess = "Sai tên tài khoản hoặc mật khẩu!!!";
  successMess = "Đăng nhập thành công!!!";
  emtyMess = "Vui lòng nhập thông tin tài khoản đầy đủ!!!";

  constructor(
    private formBuilder: FormBuilder,
    private userSer: UserService,
    private router: Router,
    private authSer: AuthService,
    private messSer: MessageService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

    this.login();
  }

  //Hiện mật khẩu
  hidePass(){
    this.showPassword = !this.showPassword
  }

  //Đăng nhập
  get form(){
    return this.loginForm.controls;
  }

  login(){
    if(this.loginForm.invalid){
      this.messSer.add({
        severity: 'error',
        summary: this.emtyMess,
        detail: '',
        life: 2000,
        sticky: false
      });
      return;
    }

    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.userSer.login(username, password).subscribe((res) =>{
      if(res.statusCode === 200){
        this.router.navigate(['/admin']);
        this.messSer.add({
          severity: 'success',
          summary: this.successMess,
          detail: '',
          life: 2000,
          sticky: false,

        });
      }
      else{
        this.messSer.add({
          severity:'error',
          summary:this.errorMess,
          detail:'',
          life: 2000,
          sticky: false
        });
      }
    },error => {
      console.error(error);
      this.messSer.add({
        severity:'error',
          summary:this.errorMess,
          detail:'',
          life: 2000,
          sticky: false
      });
    });
  }

}
