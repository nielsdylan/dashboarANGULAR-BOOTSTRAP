import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
// import { FormComponent } from './form/form.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'dominicode', component: DominiCodeComponent },
  // { path: '', component: HomeComponent },
  // { path: 'home', component: HomeComponent },
  // { path: 'form', component: FormComponent },
  // { path: '**', redirectTo:'', pathMatch:'full' }
  { path:'', pathMatch:'full', redirectTo:'agregar-empleado' },
  { path:'agregar-empleado', component :AgregarEmpleadoComponent },
  { path:'listar-empleado', component :ListarEmpleadoComponent },
  { path:'editar-empleado/:id', component :EditarEmpleadoComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
