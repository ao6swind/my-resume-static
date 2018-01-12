import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':lang/project', loadChildren: './modules/project/project.module#ProjectModule' },
  { path: ':lang', loadChildren: './modules/home/home.module#HomeModule' },
  {
    path: '**',
    redirectTo: 'en-us'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
