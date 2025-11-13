import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Equipo } from '../../../models/equipo';
import { ServiceFutbol } from '../../../services/service.futbol';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit{
public equipos!:Array<Equipo>;
@ViewChild("cajanombre") cajanombre!:ElementRef;

constructor(private _service:ServiceFutbol,private _router:Router){}

ngOnInit(): void {
  this._service.getEquipos().subscribe(response=>{
    this.equipos=response;
  })
}

buscarJugador(){
let nombre= this.cajanombre.nativeElement.value;
 this._router.navigate(["/jugador/",nombre]);
}

}
