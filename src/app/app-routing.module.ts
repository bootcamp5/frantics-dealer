import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: ':card-name', component: CardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
