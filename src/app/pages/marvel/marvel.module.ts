import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarvelPageRoutingModule } from './marvel-routing.module';

import { MarvelPage } from './marvel.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarvelPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MarvelPage]
})
export class MarvelPageModule {}
