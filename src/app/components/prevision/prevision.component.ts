import { NgForm } from '@angular/forms';
import { ProveedorService } from './../../services/proveedor.service';
import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-prevision',
  templateUrl: './prevision.component.html',
  styleUrls: ['./prevision.component.css']
})
export class PrevisionComponent implements OnInit {

  proximas: Proveedor[];
  inicio: Date;
  // FIN NO ES INCLUSIVO, ESA FECHA NO ENTRA EN EL RANGO
  fin: Date;
  total= 0;
  iva = 0;

  constructor(public proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getProveedores();
    this.proximas=this.proveedorService.proveedores;
  }

  getProveedores(){
    this.proveedorService.getProveedores().subscribe(
      res => {this.proveedorService.proveedores = res.sort((a:Proveedor, b:Proveedor) => a.proveedor < b.proveedor ? -1 : 1);
      },
     err => console.error(err)
     );
  }

  // recibe un rango de fechas de un form
  filtrarVencimientos(form: NgForm) {
    this.inicio = new Date(form.value.inicio);
    this.fin = new Date(form.value.fin);
    this.proveedorService.proveedores.forEach(prov => {
      console.log(new Date(prov.vencimiento))
    });
    this.proximas = this.proveedorService.proveedores.filter(prov => this.inicio <= new Date(prov.vencimiento) && this.fin >= new Date(prov.vencimiento));
    this.iva = this.proximas.map(a => a.iva).reduce((a, b) => a+b);
    this.total = this.proximas.map(a => a.total).reduce((a, b) => a+b);
  }

  resetForm(form: NgForm){
    form.reset();
  }

}
