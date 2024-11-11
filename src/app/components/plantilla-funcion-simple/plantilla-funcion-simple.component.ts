import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantilla } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple',
  templateUrl: './plantilla-funcion-simple.component.html',
  styleUrl: './plantilla-funcion-simple.component.css'
})
export class PlantillaFuncionSimpleComponent implements OnInit {
  @ViewChild("selectfuncion") selectFuncion!: ElementRef;
  public empleados: Array<Plantilla>;
  public funciones!: Array<string>;
  constructor(private _service: ServicePlantilla){
    this.empleados = new Array<Plantilla>();
  }

  mostrarPlantilla(): void  {
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantillaFuncion(funcion).subscribe(response => {
      this.empleados = response;
    })
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe(response => {
      this.funciones = response;
    })
  }
}
