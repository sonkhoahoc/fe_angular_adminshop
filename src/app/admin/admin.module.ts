import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { DividerModule } from 'primeng/divider';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/component/admin-dashboard/admin-dashboard.component';
import { SidebarMenuComponent } from './dashboard/sidebar-menu/sidebar-menu.component';
import { CategoryProductComponent } from './dashboard/component/category-product/category-product.component';
import { Change_passwordComponent } from './dashboard/change_password/change_password.component';
import { CreateModifyCategoryProductComponent } from './dashboard/component/category-product/create-modify-category-product/create-modify-category-product.component';
import { CategoryNewsComponent } from './dashboard/component/category-news/category-news.component';
import { CreateModifyCategoryNewsComponent } from './dashboard/component/category-news/create-modify-category-news/create-modify-category-news.component';



const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: [
      {
        path:'',
        component: AdminDashboardComponent,
      },
      {
        path: 'change_password',
        component: Change_passwordComponent
      },
      {
        path:'category-product',
        component: CategoryProductComponent,
      },
      {
        path: 'category-product/edit/:id',
        component: CreateModifyCategoryProductComponent
      },
      {
        path: 'category-product/create',
        component: CreateModifyCategoryProductComponent
      },
      {
        path: 'category-news',
        component: CategoryNewsComponent
      },
      {
        path: 'category-news/create',
        component: CreateModifyCategoryNewsComponent
      },
      {
        path: 'category-news/edit/:id',
        component: CreateModifyCategoryNewsComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    AdminDashboardComponent,
    SidebarMenuComponent,
    Change_passwordComponent,
    CategoryProductComponent,
    CreateModifyCategoryProductComponent,
    CategoryNewsComponent,
    CreateModifyCategoryNewsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    PaginatorModule,
    DividerModule,
    MessagesModule,
    ToastModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
