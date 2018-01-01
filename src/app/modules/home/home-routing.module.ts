import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './pages/about/about.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      { path: 'about', component: AboutComponent },
      {
        path: '**',
        redirectTo: 'about'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
