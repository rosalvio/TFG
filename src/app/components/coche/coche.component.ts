import { updateCoche } from './../../../../../backend/src/routes/coches.controller';
import { Coche } from './../../models/coche';
import { CocheService } from './../../services/coche.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {


  constructor(public cocheService: CocheService) { }

  ngOnInit(): void {
    this.getCoches();
  }

  resetForm(form: NgForm){
    form.reset();
  }

  getCoches(){
    this.cocheService.getCoches().subscribe(
      res => {this.cocheService.coches = res.sort((a:Coche, b:Coche) => a.matricula < b.matricula ? -1 : 1);
      },
     err => console.error(err)
     );
  }

  nuevoCoche(form: NgForm){
    if (form.value._id) {
      this.cocheService.updateCoche(form.value).subscribe(
        res => {this.getCoches();
                form.reset();
        },
        err => console.error(err)
      )
    }
    else {
      this.cocheService.createCoche(form.value).subscribe(
        res => {this.getCoches();
                form.reset();
        },
        err => console.error(err)
      )
    }
    
  }

  deleteCoche(id: string){
    if(confirm('Borrar este coche?')){
      this.cocheService.deleteCoche(id).subscribe(
        res => this.getCoches(),
        err => console.error(err)
        
      )
    }
  }

  editCoche(coche: Coche){
    this.cocheService.selectedCoche = coche;
  }

  caducaITV(coche: Coche){
    // Aproximado por los meses
    let hoy = new Date();
    let matricula = new Date(coche.fechaMatriculacion);
    let itv = new Date(coche.ultimaITV);
    let faltaITV = coche.ultimaITV==null;
    let yearDif = hoy.getUTCFullYear() - matricula.getUTCFullYear();
    let monthDif = hoy.getUTCMonth() - matricula.getUTCMonth();
    let yearITV = hoy.getUTCFullYear() - itv.getUTCFullYear();
    let monthITV = hoy.getUTCMonth() - itv.getUTCMonth();


    // Primera ITV
    if (yearDif == 4) {
      // Empieza a avisar 1 mes antes
      if (monthDif >= -1) {
        // Toca ITV o es cercana
        return faltaITV;
      }
    }
    // ITVs hasta los 10 anyos cada 2
    else if (yearDif > 4 && yearDif < 10) {
      if (yearITV == 2) {
        if (monthITV >= -1) {
          return true;
        }
      }
    }
    else if (yearDif >= 0) {
      if (yearITV == 1) {
        if (monthITV >= -1){
          return true;
        }
      }
    }
    return false;
  }

    

}
