import { Component, OnInit, ViewChild } from '@angular/core';
import { Jugador } from '../../../models/jugador';
import { ServiceFutbol } from '../../../services/service.futbol';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  templateUrl: './jugadores-component.html',
  styleUrl: './jugadores-component.css',
})
export class JugadoresComponent implements OnInit{
public jugadores!:Array<Jugador>;
public nombrerecibido!:string;

constructor(private _service:ServiceFutbol,private _activeRoute:ActivatedRoute){}

ngOnInit(): void {
  this._activeRoute.params.subscribe((parametros:Params)=>{
    this.nombrerecibido=parametros['nombre'];
    console.log("Nombre: " + this.nombrerecibido);
    //CARGAMOS LOS JUGADORES CON EL NOMBRE RECIBIDO
    this._service.getJugadores(this.nombrerecibido).subscribe(response=>{
      this.jugadores=response;
    })
  })
}


}
