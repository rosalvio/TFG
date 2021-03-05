import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocheComponent } from './components/coche/coche.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClienteComponent } from './components/cliente/cliente.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { PrevisionComponent } from './components/prevision/prevision.component';


@NgModule({
  declarations: [
    AppComponent,
    CocheComponent,
    ClienteComponent,
    FacturaComponent,
    ProveedorComponent,
    PrevisionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
