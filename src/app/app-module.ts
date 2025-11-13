import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceFiles } from '../services/servicesFiles';
import { MenuComponent } from './components/menu-component/menu-component';
import { EquiposComponent } from './components/equipos-component/equipos-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { HomeComponent } from './components/home-component/home-component';
import { ServiceFutbol } from '../services/service.futbol';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    EquiposComponent,
    JugadoresComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),provideHttpClient(),ServiceFiles,ServiceFutbol
  ],
  bootstrap: [App]
})
export class AppModule { }
