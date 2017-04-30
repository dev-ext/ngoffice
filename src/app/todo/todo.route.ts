import { Routes, RouterModule, Router } from '@angular/router';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ListComponent } from './list/list.component';
import { ArchiveComponent } from './archive/archive.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: TodoHomeComponent,
    children: [
    { path: 'list', component: ListComponent },
    { path: 'archive', component: ArchiveComponent },
    { path: ':id', component: DetailsComponent },

    { path: '', redirectTo: 'list' }
  ]
 }
];

export const TodoRoutes = RouterModule.forChild(routes);

