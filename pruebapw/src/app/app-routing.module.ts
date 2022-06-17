import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarComponent } from './pages/gestionar/gestionar.component';

const routes: Routes = [

  {path: "gestionar", component:GestionarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
