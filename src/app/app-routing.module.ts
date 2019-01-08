import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduccionComponent } from './components/produccion/produccion.component';
import {AdministracionComponent} from './components/administracion/administracion.component'
import { OrdenDeProduccionComponent } from './components/orden-de-produccion/orden-de-produccion.component';
import { ProductoEnProcesoComponent } from './components/producto-en-proceso/producto-en-proceso.component';
import {InsumosComponent} from './components/administracion/insumos/insumos.component'
import {AviosComponent} from './components/administracion/insumos/avios/avios.component'
import { ContactListComponent } from './components/administracion/insumos/tela/contact-list.component';


const routes: Routes = [
  { path: 'produccion', component: ProduccionComponent },
  { path: 'administracion', component: AdministracionComponent },
  { path: 'orden-de-produccion', component: OrdenDeProduccionComponent },
  { path: 'producto-en-proceso', component: ProductoEnProcesoComponent },
  { path: 'insumos', component: InsumosComponent },
  { path: 'avios', component: AviosComponent},
  { path: 'tela', component: ContactListComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
