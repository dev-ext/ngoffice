import { Routes, RouterModule, Router, CanActivate } from '@angular/router';

import { UnAuthGuard } from '../shared/services/unauth.guard';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ListComponent } from './list/list.component';
import { ArchiveComponent } from './archive/archive.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: TodoHomeComponent,
    children: [
    { path: 'list', component: ListComponent, canActivate: [UnAuthGuard] },
    { path: 'archive', component: ArchiveComponent, canActivate: [UnAuthGuard] },
    { path: ':id', component: DetailsComponent, canActivate: [UnAuthGuard] },

    { path: '', redirectTo: 'list' }
  ]
 }
];

export const TodoRoutes = RouterModule.forChild(routes);

