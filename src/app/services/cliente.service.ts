import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL = 'http://localhost:5000/clientes';

  clientes: Cliente[];

  selectedCliente: Cliente = {
    nombre: ""
  }

  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get<Cliente[]>(this.URL);
  }

  createCliente(cliente: Cliente) {
    return this.http.post(this.URL, cliente);
  }

  updateCliente(cliente: Cliente) {
    return this.http.put(`${this.URL}/${cliente._id}`, cliente);
  }

  deleteCliente(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
