import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Bien } from '../domain/bien';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor(private afs: AngularFirestore) { }


  getBienes(): Observable<any[]> {
    const refBienes = this.afs.collection("bienes");
    return refBienes.valueChanges();
  }

  agregar(bien: Bien) {
    const refBien = this.afs.collection("bienes");
    if (bien.id == null) {
      bien.id = this.afs.createId();
    }
    refBien.doc(bien.id).set(Object.assign({}, bien));
  }
}
