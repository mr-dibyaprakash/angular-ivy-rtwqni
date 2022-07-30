import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'cart-details/:id',
    component: CartDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
