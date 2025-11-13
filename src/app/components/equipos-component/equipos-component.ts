import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../../models/equipo';
import { ServiceFutbol } from '../../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';
import { DatosEquipo } from '../../../models/datosequipo';

@Component({
  selector: 'app-equipos-component',
  standalone: false,
  templateUrl: './equipos-component.html',
  styleUrl: './equipos-component.css',
})
export class EquiposComponent implements OnInit{

public equipo!:Equipo;
public datosEquipo!:DatosEquipo;
public idEquiporecibido!:number;

constructor(private _service:ServiceFutbol,private _activeRoute:ActivatedRoute){}
ngOnInit(): void {
  this._activeRoute.params.subscribe((parametros:Params)=>{
    let idEquipo=parseInt(parametros['idEquipo']);

    let datos:DatosEquipo;
    datos= new DatosEquipo();

    //procedemos con los servicios:
    this._service.findEquipo(idEquipo).subscribe(response=>{
      datos.equipo=response;
    })

    this._service.getJugadoresEquipo(idEquipo).subscribe(response=>{
      datos.jugadores=response;
    })

    

  })

}

}
