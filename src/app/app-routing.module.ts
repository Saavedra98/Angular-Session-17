import { MisionComponent } from './pages/mision/mision.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisionComponent } from './pages/vision/vision.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent,
    children:[
      {path:'vision', component:VisionComponent},
      {path:'mision', component:MisionComponent}
    ]},
  {path:'contacto', component:ContactoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
