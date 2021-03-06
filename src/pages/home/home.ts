import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producao } from '../../models/producao';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProducoesProvider } from '../../providers/producoes/producoes'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  prodsList$: Observable<Producao[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private producoesProvider: ProducoesProvider) {

      this.prodsList$ = this.producoesProvider.getProdsList()
        .snapshotChanges()
        .pipe(
          map(changes => {
            return changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
        }))
      })
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }

  showAllProds() {
    this.prodsList$ = this.producoesProvider.getProdsList()
      .snapshotChanges()
      .pipe(
        map(changes => {
      return changes.map (c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    })
  );
  }
  
}
