import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { UikitModule } from './../uikit/uikit.module';
import { AuthService } from '../services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UikitModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [
    AuthService
  ],
  exports: [
    UikitModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
