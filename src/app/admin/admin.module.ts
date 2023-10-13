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
import { FileUploadModule } from 'primeng/fileupload';
import { DropdownModule } from 'primeng/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { TreeSelectModule } from 'primeng/treeselect';
import { NgSelect2Module } from 'ng-select2';
import { EditorModule } from 'primeng/editor';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './dashboard/component/admin-dashboard/admin-dashboard.component';
import { SidebarMenuComponent } from './dashboard/sidebar-menu/sidebar-menu.component';
import { CategoryProductComponent } from './dashboard/component/category-product/category-product.component';
import { Change_passwordComponent } from './dashboard/change_password/change_password.component';
import { CreateModifyCategoryProductComponent } from './dashboard/component/category-product/create-modify-category-product/create-modify-category-product.component';
import { CategoryNewsComponent } from './dashboard/component/category-news/category-news.component';
import { CreateModifyCategoryNewsComponent } from './dashboard/component/category-news/create-modify-category-news/create-modify-category-news.component';
import { SliderComponent } from './dashboard/component/slider/slider.component';
import { CreateModifySliderComponent } from './dashboard/component/slider/create-modify-slider/create-modify-slider.component';
import { SizeProductComponent } from './dashboard/component/size-product/size-product.component';
import { ProductComponent } from './dashboard/component/product/product.component';
import { CreateModifySizeProductComponent } from './dashboard/component/size-product/create-modify-size-product/create-modify-size-product.component';
import { CreateModifyProductComponent } from './dashboard/component/product/create-modify-product/create-modify-product.component';



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
      {
        path: 'slider',
        component: SliderComponent
      },
      {
        path: 'slider/create',
        component: CreateModifySliderComponent
      },
      {
        path: 'slider/edit/:id',
        component: CreateModifySliderComponent
      },
      {
        path: 'size',
        component: SizeProductComponent
      },
      {
        path: 'size/create',
        component: CreateModifySizeProductComponent
      },
      {
        path: 'size/edit/:id',
        component: CreateModifySizeProductComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'product/create',
        component: CreateModifyProductComponent
      },
      {
        path: 'product/edit/:id',
        component: CreateModifyProductComponent
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
    SliderComponent,
    CreateModifySliderComponent,
    SizeProductComponent,
    CreateModifySizeProductComponent,
    ProductComponent,
    CreateModifyProductComponent
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
    FileUploadModule,
    DropdownModule,
    NgSelectModule,
    TreeSelectModule,
    FileUploadModule,
    NgSelect2Module,
    EditorModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
