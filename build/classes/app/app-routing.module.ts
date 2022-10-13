import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './list/list.component';

const routes: Routes = [{
  path:'',
  component: ListComponent,
},
{
  path:'task',
  redirectTo:'/',
  pathMatch:'full'
},
{
  path:'task',
  children: [{
    path:'add',
    component:ListComponent,
  },
  {
    path:'',
    redirectTo:'/list',
    pathMatch:'full'
  },],
},
{
  path:'**',
  redirectTo:'/list'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
