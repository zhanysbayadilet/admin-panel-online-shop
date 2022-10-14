import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';

import {FormsModule} from "@angular/forms";
import { NavComponent } from './components/nav/nav.component';

import {MatIconModule} from '@angular/material/icon';
import { FocusDirective } from './directives/focus.directive';
import { SearchAdminPipe } from './pipes/search-admin.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    NavComponent,
    FocusDirective,
    SearchAdminPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
