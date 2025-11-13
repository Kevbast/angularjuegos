import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../../models/equipo';
import { ServiceFutbol } from '../../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';
import { DatosEquipo } from '../../../models/datosequipo';
import { forkJoin } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-equipos-component',
  standalone: false,
  templateUrl: './equipos-component.html',
  styleUrls: ['./equipos-component.css'],
})
export class EquiposComponent implements OnInit{

public equipo!:Equipo;
public datosEquipo!:DatosEquipo;
public idEquiporecibido!:number;

constructor(private _service:ServiceFutbol,private _activeRoute:ActivatedRoute){}
ngOnInit(): void {
  this._activeRoute.params.pipe(
    switchMap((parametros: Params) => {
      const idEquipo = parseInt(parametros['idEquipo']);
      return forkJoin({
        equipo: this._service.findEquipo(idEquipo),
        jugadores: this._service.getJugadoresEquipo(idEquipo).pipe(delay(2000))//retrasamos un poco una petición
      });
    })
  ).subscribe(result => {
    const datos = new DatosEquipo();
    datos.equipo = result.equipo;
    datos.jugadores = result.jugadores;
    this.datosEquipo = datos;
  });

}

}
