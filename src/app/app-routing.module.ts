import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { SuperusuarioComponent } from './superusuario/superusuario.component'
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';


//This is my case 
const routes: Routes = [
    {
        path: 'crear-cuenta',
        component: CrearCuentaComponent,
        data: { title: 'Crear Cuenta' }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Iniciar Sesión' }
    },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Fundación Laika' },
        canActivate: [AuthGuard] 
    },
    {
        path: '',
        component: LoginComponent,
        data: { title: 'Fundación Laika' },
        canActivate: [AuthGuard] 
    }, 
    {
        path: 'usuarios',
        component: SuperusuarioComponent,
        data: { title: 'Administración de usuarios' },
        canActivate: [AuthGuard] 
    }, 
    {
        path: 'consulta',
        component: ConsultarComponent,
        data: { title: 'Consultar Rescate' },
        canActivate: [AuthGuard] 
    },
    {
        path: 'registrar',
        component: RegistrarComponent,
        data: { title: 'Registrar Rescate' },
        canActivate: [AuthGuard] 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }