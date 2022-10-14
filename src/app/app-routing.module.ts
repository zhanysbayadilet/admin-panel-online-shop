import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminViewComponent} from "./components/admin-view/admin-view.component";

const routes: Routes = [
  {path: 'admins', component: AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
