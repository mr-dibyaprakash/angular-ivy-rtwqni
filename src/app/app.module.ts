import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './components/home/home.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule],
  declarations: [AppComponent, UserListComponent, UserDetailsComponent,HomeComponent, CartDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
