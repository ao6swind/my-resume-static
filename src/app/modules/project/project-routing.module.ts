import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { IndexComponent } from './pages/index/index.component';
import { DetailComponent } from './pages/detail/detail.component';
const routes: Routes = [
  { 
    path: '',
    component: ProjectComponent,
    children: [
      { path: ':id', component: DetailComponent },
      { path: '', component: IndexComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
