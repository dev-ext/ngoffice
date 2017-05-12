import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UikitModule } from './../uikit/uikit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UikitModule
  ],
  declarations: [],
  exports: [
    UikitModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
