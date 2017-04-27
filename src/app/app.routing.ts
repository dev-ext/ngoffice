import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const ngofficeRoute: Routes = [
  // todo
  { path: 'todo', loadChildren: 'app/todo/todo.module#TodoModule'},
  
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },

];

export const AppRoutes = RouterModule.forRoot(ngofficeRoute);

