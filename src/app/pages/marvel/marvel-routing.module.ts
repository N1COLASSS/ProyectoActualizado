import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarvelPage } from './marvel.page';

const routes: Routes = [
  {
    path: '',
    component: MarvelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarvelPageRoutingModule {}
