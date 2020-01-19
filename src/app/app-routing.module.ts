import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyUserComponent } from './body-user/body-user.component';
import { BodyRepoComponent } from './body-repo/body-repo.component';


const routes: Routes = [
  {path:'user', component: BodyUserComponent},
  {path:'repos', component: BodyRepoComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
