import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producao } from '../../models/producao';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProducoesProvider } from '../../providers/producoes/producoes'

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

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
