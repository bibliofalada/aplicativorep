import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { Producao } from '../../models/producao';

@Injectable()
export class ProducoesProvider {

  private prodListRef = this.db.list<Producao>('prod-list');

  constructor(private db: AngularFireDatabase) { }
  
  getProdsList() {
    return this.prodListRef;
  }

filterByString(band: string) {
    return this.db.list('/prod-list', ref => ref.orderByChild('band').equalTo(band));
  }

assembleBandFilteredList(ctxt: string): any {
    return(this.filterByString(ctxt));
  }

addProd(prod: Producao) {
    return this.prodListRef.push(prod);
  }

editProd(prod: Producao) {
    return this.prodListRef.update(prod.key, prod);
  }
removeProd(prod: Producao) {
    return this.prodListRef.remove(prod.key);
  }

}
