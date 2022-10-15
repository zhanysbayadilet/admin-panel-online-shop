import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminViewComponent} from "./components/admin-view/admin-view.component";
import {AdminCreateComponent} from "./components/admin-create/admin-create.component";
import {AdminDetailsComponent} from "./components/admin-details/admin-details.component";
import {AdminEditComponent} from "./components/admin-edit/admin-edit.component";
import {ClientViewComponent} from "./components/client-view/client-view.component";
import {ClientCreateComponent} from "./components/client-create/client-create.component";
import {ClientDetailsComponent} from "./components/client-details/client-details.component";
import {ItemViewComponent} from "./components/item-view/item-view.component";
import {ItemCreateComponent} from "./components/item-create/item-create.component";
import {ItemDetailsComponent} from "./components/item-details/item-details.component";

const routes: Routes = [
  {path: 'admins', component: AdminViewComponent},
  {path: 'admins/create', component: AdminCreateComponent},
  {path: 'admins/:id', component: AdminDetailsComponent},
  {path: 'clients', component: ClientViewComponent},
  {path: 'clients/create', component: ClientCreateComponent},
  {path: 'clients/:id', component: ClientDetailsComponent},
  {path: 'items', component: ItemViewComponent},
  {path: 'items/create', component: ItemCreateComponent},
  {path: 'items/:id', component: ItemDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
