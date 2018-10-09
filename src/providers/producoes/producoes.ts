import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';

@Injectable()
export class ProducoesProvider {

  constructor(private db: AngularFireDatabase) { }
  
  getAll(){

  }

  get(key: string){

  }

}
