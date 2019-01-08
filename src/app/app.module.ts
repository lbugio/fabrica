import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {MaterialModule} from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './components/barra-navegacion/barra-navegacion.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ContactService } from './services/contact.service';

import { ProduccionComponent } from './components/produccion/produccion.component';
import { AdministracionComponent } from './components/administracion/administracion.component';
import { OrdenDeProduccionComponent } from './components/orden-de-produccion/orden-de-produccion.component';
import { ProductoEnProcesoComponent } from './components/producto-en-proceso/producto-en-proceso.component';
import { InsumosComponent } from './components/administracion/insumos/insumos.component';
import { AviosComponent } from './components/administracion/insumos/avios/avios.component';
import { FormularioAvioComponent } from './components/administracion/insumos/avios/formulario-avio/formulario-avio.component';
import { ContactListComponent } from './components/administracion/insumos/tela/contact-list.component';
import { ContactComponent } from './components/administracion/insumos/tela/formulario-tela/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    ProduccionComponent,
    AdministracionComponent,
    OrdenDeProduccionComponent,
    ProductoEnProcesoComponent,
    InsumosComponent,
    AviosComponent,
    FormularioAvioComponent,
    ContactListComponent,
    ContactComponent,
    
    
  ],
  entryComponents: [
    FormularioAvioComponent, ContactComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
