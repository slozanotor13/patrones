import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { PanelComponent } from './presentation/panel/panel.component';

const routes: Routes = [


   { path: 'login', component: LoginComponent },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
     { path: 'panel', component: PanelComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
