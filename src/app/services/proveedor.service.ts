import { HttpClient } from '@angular/common/http';
import { Proveedor } from './../models/proveedor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  URL = 'http://localhost:5000/proveedores';

  proveedores : Proveedor[];
  selectedProveedor: Proveedor = {
    proveedor:'',
    factura:'',
    fecha: null,
    vencimiento: null,
    base: null,
    iva: null,
    total: null
  };

  constructor(private http: HttpClient) { }

  getProveedores() {
    return this.http.get<Proveedor[]>(this.URL);
  }

  createProveedor(proveedor: Proveedor) {
    return this.http.post(this.URL, proveedor);
  }

  updateProveedor(proveedor: Proveedor) {
    return this.http.put(`${this.URL}/${proveedor._id}`, proveedor);
  }

  deleteProveedor(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }

}
