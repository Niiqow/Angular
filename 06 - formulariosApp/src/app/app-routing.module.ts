import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateModule } from './template/template.module';
import { ReactiveModule } from './reactive/reactive.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [

  {path: 'template', loadChildren: () => import('./template/template.module').then(m=>TemplateModule )},
  {path: 'reactive', loadChildren: () => import('./reactive/reactive.module').then(m=>ReactiveModule )},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m=>AuthModule )},
  {path: '**', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
