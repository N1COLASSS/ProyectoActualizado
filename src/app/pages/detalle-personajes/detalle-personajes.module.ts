import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePersonajesPageRoutingModule } from './detalle-personajes-routing.module';

import { DetallePersonajesPage } from './detalle-personajes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePersonajesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallePersonajesPage]
})
export class DetallePersonajesPageModule {}
