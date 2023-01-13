import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { VisionComponent } from './vision/vision.component';
import { MisionComponent } from './mision/mision.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    VisionComponent,
    MisionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],exports: [
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    VisionComponent,
    MisionComponent
  ],
})
export class PagesModule { }
