import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.scss']
})
export class AgregarEmpleadoComponent implements OnInit {
  formEmpleados:FormGroup;
  constructor(
    public formulario:FormBuilder,
    private crudServices:CrudService,
    private ruteador:Router
  ) {

    this.formEmpleados =this.formulario.group({
      nombre:[''],
      correo:['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log('click');
    console.log(this.formEmpleados.value);
    this.crudServices.agregarEmpleado(this.formEmpleados.value).subscribe();
    this.ruteador.navigateByUrl('/listar-empleado');
  }
}
