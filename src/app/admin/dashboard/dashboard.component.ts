import { Component } from '@angular/core';

import { AuthService } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authSer: AuthService) {}

  logout(){
    this.authSer.logout();
  }

}
