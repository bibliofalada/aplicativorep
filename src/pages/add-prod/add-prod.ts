import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producao } from '../../models/producao';
import { ProducoesProvider } from '../../providers/producoes/producoes'
import { HomePage } from '../home/home';

/**
 * Generated class for the AddProdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-prod',
  templateUrl: 'add-prod.html',
})
export class AddProdPage {

  prod: Producao = {
    titulo: '',
    descricao: '',
    url: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private prods: ProducoesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProdPage');
  }

  addProd(prod: Producao) {
    this.prods.addProd(prod).then(ref => {
      this.navCtrl.setRoot(HomePage, {key: ref.key});
    });
  }

}
