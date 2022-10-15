import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminViewComponent} from "./components/admin-view/admin-view.component";
import {AdminCreateComponent} from "./components/admin-create/admin-create.component";
import {AdminDetailsComponent} from "./components/admin-details/admin-details.component";
import {AdminEditComponent} from "./components/admin-edit/admin-edit.component";

const routes: Routes = [
  {path: 'admins', component: AdminViewComponent},
  {path: 'admin-create', component: AdminCreateComponent},
  {path: 'admins/:id', component: AdminDetailsComponent},
  {path: 'admins/:id/edit', component: AdminEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
