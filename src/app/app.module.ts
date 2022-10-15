import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

import {FormsModule} from "@angular/forms";
import { NavComponent } from './components/nav/nav.component';

import { FocusDirective } from './directives/focus.directive';
import { SearchAdminPipe } from './pipes/search-admin.pipe';

import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from "@angular/material/icon";
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { SearchClientPipe } from './pipes/search-client.pipe';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { SearchItemPipe } from './pipes/search-item.pipe';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    NavComponent,
    FocusDirective,
    SearchAdminPipe,
    AdminCreateComponent,
    AdminDetailsComponent,
    AdminEditComponent,
    ClientViewComponent,
    SearchClientPipe,
    ClientCreateComponent,
    ClientDetailsComponent,
    ItemViewComponent,
    SearchItemPipe,
    ItemCreateComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
