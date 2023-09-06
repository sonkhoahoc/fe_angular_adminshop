import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });
  }

  createUser() {
    if (this.registerForm.invalid) {
      return;
    }

    const username = this.registerForm.get('username').value;
    const email = this.registerForm.get('email').value;
    const password = this.registerForm.get('password').value;
    const confirmPassword = this.registerForm.get('confirmPass').value;

    if (password !== confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Mật khẩu và mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại.' });
      return;
    }

    this.userService.checkUser(username, email).subscribe(
      (response) => {
        if (response.exists) {
          this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Tên tài khoản hoặc email đã tồn tại. Vui lòng chọn tên khác hoặc email khác.' });
        } else {
          const newUser = {
            username: username,
            email: email,
            password: password
          };

          this.userService.create(newUser).subscribe(
            (response) => {
              this.messageService.add({ severity: 'success', summary: 'Thành công', detail: 'Tạo tài khoản thành công.' });
            },
            (error) => {
              this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Tạo tài khoản thất bại. Vui lòng thử lại sau.' });
            }
          );
        }
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Lỗi', detail: 'Đã xảy ra lỗi khi kiểm tra tài khoản và email. Vui lòng thử lại sau.' });
      }
    );
  }
}
