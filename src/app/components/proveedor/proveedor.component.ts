import { Proveedor } from './../../models/proveedor';
import { ProveedorService } from './../../services/proveedor.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor(public proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getProveedores(){
    this.proveedorService.getProveedores().subscribe(
      res => {this.proveedorService.proveedores = res.sort((a:Proveedor, b:Proveedor) => a.proveedor < b.proveedor ? -1 : 1);
      },
     err => console.error(err)
     );
  }

  nuevoProveedor(form: NgForm){
    
    if(form.value.iva == null){
      form.value.iva = form.value.base * 0.21;
    }
    form.value.total = form.value.base + form.value.iva;
    if (form.value._id) {
      this.proveedorService.updateProveedor(form.value).subscribe(
        res => {this.getProveedores();
                form.reset();
        },
        err => console.error(err)
      )
    }
    else {
      this.proveedorService.createProveedor(form.value).subscribe(
        res => {this.getProveedores();
                form.reset();
        },
        err => console.error(err)
      )
    }
    
  }

  deleteProveedor(id: string){
    if(confirm('Borrar este proveedor?')){
      this.proveedorService.deleteProveedor(id).subscribe(
        res => this.getProveedores(),
        err => console.error(err)
        
      )
    }
  }

  editProveedor(proveedor: Proveedor){
    this.proveedorService.selectedProveedor = proveedor;
  }

}
