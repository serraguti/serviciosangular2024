import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillaFuncionSimpleComponent } from './components/plantilla-funcion-simple/plantilla-funcion-simple.component';
import { PlantillaFuncionMultipleComponent } from './components/plantilla-funcion-multiple/plantilla-funcion-multiple.component';
const routes: Routes = [
  {path: "", component: PersonasapiComponent},
  {path: "libreria", component: LibreriaComponent},
  {path: "coches", component: CochesComponent},
  {path: "plantillasimple", component: PlantillaFuncionSimpleComponent}, 
  {path: "plantillamultiple", component: PlantillaFuncionMultipleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
