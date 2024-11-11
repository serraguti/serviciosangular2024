import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { ServiceComics } from './services/service.comics';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';
import { ServicePlantilla } from './services/service.plantillas';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent, 
    PersonasapiComponent, MenuComponent, CochesComponent, PlantillaFuncionSimpleComponent, PlantillaFuncionMultipleComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasstandaloneComponent
  ],
  providers: [ServiceComics, ServicePersonas
    , provideHttpClient(), ServiceCoches
    , ServicePlantilla],
  bootstrap: [AppComponent]
})
export class AppModule { }
