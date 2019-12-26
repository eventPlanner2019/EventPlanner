import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersignupComponent } from './usersignup/usersignup.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"usp",component:UsersignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
