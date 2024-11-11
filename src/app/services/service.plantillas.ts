import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ServicePlantilla {
    constructor(private _http: HttpClient){}

    getFunciones() : Observable<any> {
        let request = "api/plantilla/funciones";
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }

    getPlantillaFuncion(funcion: string): Observable<any> {
        let request = "api/plantilla/plantillafuncion/" + funcion;
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }

    getPlantillaFunciones(funciones: Array<string>): Observable<any> {
        //?funcion=ENFERMERA&funcion=ENFERMERO&funcion=INTERINO
        let data = "";
        for (var funcion of funciones){
            data += "funcion=" + funcion + "&";
        }
        //funcion=ENFERMERA&funcion=ENFERMERO&funcion=INTERINO&
        //ELIMINAMOS & DE LA ULTIMA POSICION
        data = data.substring(0, data.length - 1);
        let request = "api/plantilla/plantillafunciones?" + data;
        let url = environment.urlApiPlantilla + request;
        return this._http.get(url);
    }
}