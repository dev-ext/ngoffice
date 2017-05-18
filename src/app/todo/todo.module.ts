import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { TodoRoutes } from './todo.route';

import { TaskService } from '../services/task.service';

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
    TodoRoutes,
    SharedModule
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
  exports: [],
  providers: [
    TaskService
  ]
})
export class TodoModule { }
