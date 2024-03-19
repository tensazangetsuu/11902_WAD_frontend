import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { HomeTagComponent } from './tagComponent/home/home.component';
import { DetailsTagComponent } from './tagComponent/details/details.component';
import { DeleteTagComponent } from './tagComponent/delete/delete.component';
import { EditTagComponent } from './tagComponent/edit/edit.component';
import { CreateTagComponent } from './tagComponent/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteComponent,
  },
  {
    path: 'tag-home',
    component: HomeTagComponent,
  },
  {
    path: 'tag-create',
    component: CreateTagComponent,
  },
  {
    path: 'tag-edit/:id',
    component: EditTagComponent,
  },
  {
    path: 'tag-details/:id',
    component: DetailsTagComponent,
  },
  {
    path: 'tag-delete/:id',
    component: DeleteTagComponent,
  },
];
