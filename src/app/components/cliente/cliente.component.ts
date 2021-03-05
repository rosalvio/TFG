import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getClientes();
  }
  resetForm(form: NgForm){
    form.reset();
  }

  getClientes(){
    this.clienteService.getClientes().subscribe(
      res => {this.clienteService.clientes = res.sort((a:Cliente, b:Cliente) => a.nombre < b.nombre ? -1 : 1);
      },
     err => console.error(err)
     );
  }

  nuevoCliente(form: NgForm){
    if (form.value._id) {
      this.clienteService.updateCliente(form.value).subscribe(
        res => {this.getClientes();
                form.reset();
        },
        err => console.error(err)
      )
    }
    else {
      this.clienteService.createCliente(form.value).subscribe(
        res => {this.getClientes();
                form.reset();
        },
        err => console.error(err)
      )
    }
    
  }

  deleteCliente(id: string){
    if(confirm('Borrar este cliente?')){
      this.clienteService.deleteCliente(id).subscribe(
        res => this.getClientes(),
        err => console.error(err)
        
      )
    }
  }

  editCliente(cliente: Cliente){
    this.clienteService.selectedCliente = cliente;
  }
}
