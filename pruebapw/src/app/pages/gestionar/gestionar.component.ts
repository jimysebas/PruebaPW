import { Component, OnInit } from '@angular/core';
import { Bien } from 'src/app/domain/bien';
import { ListadoService } from 'src/app/services/listado.service';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.component.html',
  styleUrls: ['./gestionar.component.scss']
})
export class GestionarComponent implements OnInit {


  listaBienes:any;
  bien: Bien = new Bien();

  constructor(private listadoService: ListadoService) { }

  ngOnInit(): void {
    this.listadoService.getBienes().subscribe((data:any)=> {
      const aux:any=data;
      this.listadoService=aux;
  });
  }

  

}
