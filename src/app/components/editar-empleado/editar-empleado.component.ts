import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.scss']
})
export class EditarEmpleadoComponent implements OnInit {
  formEmpleados:FormGroup;
  elID:any;
  constructor(
    private activateRoute:ActivatedRoute,
    private crudService: CrudService,
    public formulario:FormBuilder,
    private ruteador:Router
  ) {
    // obtener el id de la ruta
    this.elID = this.activateRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.optenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formEmpleados.setValue({
          nombre:respuesta[0]['nombre'],
          correo:respuesta[0]['correo']
        });
      }
    );

    this.formEmpleados=this.formulario.group(
      {
        nombre:[''],
        correo:['']
      }
    );
  }

  ngOnInit(): void {

  }
  enviarDatos():any{
    console.log(this.formEmpleados.value);
    this.crudService.editarEmpleado(this.elID, this.formEmpleados.value).subscribe((respuesta)=>{
      if (respuesta.success==1) {
        this.ruteador.navigateByUrl('/listar-empleado');
      }
    });

  }

}
