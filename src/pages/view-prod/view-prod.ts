import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Producao } from '../../models/producao';

/**
 * Generated class for the ViewProdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-prod',
  templateUrl: 'view-prod.html',
})
export class ViewProdPage {
  prod: Producao;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.prod = this.navParams.get('prod');
  }

}
