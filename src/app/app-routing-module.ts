import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"equipos/:idEquipo",component:EquiposComponent},
  {path:"jugador/:nombre",component:JugadoresComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
