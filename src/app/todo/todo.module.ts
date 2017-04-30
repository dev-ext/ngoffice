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
    PreviewComponent
  ],
  exports: [
    TodoHomeComponent
  ]
})
export class TodoModule { }
