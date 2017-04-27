import { Routes, RouterModule, Router } from '@angular/router';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: TodoHomeComponent,
    children: [
    { path: 'list', component: ListComponent}
  ]
 }
];

export const TodoRoutes = RouterModule.forChild(routes);

