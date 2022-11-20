import { LoginComponent } from './pages/login/login.component';
import { LegendsDetailComponent } from './pages/legends-detail/legends-detail.component';
import { LegendsComponent } from './pages/legends/legends.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'legends', component: LegendsComponent},
  {path: 'legends/:id', component: LegendsDetailComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
