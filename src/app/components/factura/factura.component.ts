import { Factura } from './../../models/factura';
import { FacturaService } from './../../services/factura.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor(public facturaService: FacturaService) { }

  ngOnInit(): void {
    this.getFacturas();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getFacturas(){
    this.facturaService.getFacturas().subscribe(
      res => {this.facturaService.facturas = res.sort((a:Factura, b:Factura) => a.factura < b.factura ? -1 : 1);
      },
     err => console.error(err)
     );
  }

  nuevoFactura(form: NgForm){
    form.value.iva = form.value.base * 0.21;
    form.value.total = form.value.iva + form.value.base;
    if (form.value._id) {
      this.facturaService.updateFactura(form.value).subscribe(
        res => {this.getFacturas();
                form.reset();
        },
        err => console.error(err)
      )
    }
    else {
      if (form.value.iva == null) {
        form.value.iva = form.value.base * 0.21;
      }
      this.facturaService.createFactura(form.value).subscribe(
        res => {this.getFacturas();
                form.reset();
        },
        err => console.error(err)
      )
    }
    
  }

  deleteFactura(id: string){
    if(confirm('Borrar este factura?')){
      this.facturaService.deleteFactura(id).subscribe(
        res => this.getFacturas(),
        err => console.error(err)
        
      )
    }
  }

  editFactura(factura: Factura){
    this.facturaService.selectedFactura = factura;
  }

}
