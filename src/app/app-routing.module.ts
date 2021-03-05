import { PrevisionComponent } from './components/prevision/prevision.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CocheComponent } from './components/coche/coche.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'coches',
    component: CocheComponent
  },
  {
    path:'clientes',
    component: ClienteComponent
  },
  {
    path:'facturas',
    component: FacturaComponent
  },
  {
    path:'proveedores',
    component: ProveedorComponent
  },
  {
    path:'prevision',
    component: PrevisionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
