import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoRoutes } from './todo.route';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ListComponent } from './list/list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArchiveComponent } from './archive/archive.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { PreviewComponent } from './preview/preview.component';
import { CreateComponent } from './create/create.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutes
  ],
  declarations: [
    TodoHomeComponent,
    ListComponent,
    SidebarComponent,
    ArchiveComponent,
    DetailsComponent,
    EditComponent,
    PreviewComponent,
    CreateComponent,
    TodoFormComponent,
    TodoListItemComponent
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
