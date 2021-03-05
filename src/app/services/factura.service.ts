import { Factura } from './../models/factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  URL = 'http://localhost:5000/facturas';

  facturas : Factura[];
  selectedFactura: Factura = {
    cliente: '',
    factura:'',
    fecha:null,
    base: null,
    iva: null,
    total: null
  };

  constructor(private http: HttpClient) { }

  getFacturas() {
    return this.http.get<Factura[]>(this.URL);
  }

  createFactura(factura: Factura) {
    return this.http.post(this.URL, factura);
  }

  updateFactura(factura: Factura) {
    return this.http.put(`${this.URL}/${factura._id}`, factura);
  }

  deleteFactura(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
