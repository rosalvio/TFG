import { updateCoche } from './../../../../backend/src/routes/coches.controller';
import { Coche } from './../models/coche';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  URL_COCHES = 'http://localhost:5000/coches';

  coches : Coche[];
  selectedCoche: Coche = {
    matricula: '',
    kms: null,
    cliente: '',
    marca: '',
    modelo: ''
  };

  constructor(private http: HttpClient) { }

  getCoches() {
    return this.http.get<Coche[]>(this.URL_COCHES);
  }

  createCoche(coche: Coche) {
    return this.http.post(this.URL_COCHES, coche);
  }

  updateCoche(coche: Coche) {
    return this.http.put(`${this.URL_COCHES}/${coche._id}`, coche);
  }

  deleteCoche(id: string) {
    return this.http.delete(`${this.URL_COCHES}/${id}`);
  }

}
