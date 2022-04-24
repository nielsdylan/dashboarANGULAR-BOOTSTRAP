import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../interfaces/Empleado';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/empleados/';
  constructor(private clienteHttp:HttpClient) { }

  agregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  optenerEmpleados(){
    return this.clienteHttp.get(this.API);
  }

  borrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }

  optenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }

  editarEmpleado(id:any, datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }
}
