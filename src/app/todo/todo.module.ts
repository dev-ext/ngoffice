import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoRoutes } from './todo.route';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutes
  ],
  declarations: [
    TodoHomeComponent,
    ListComponent
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
