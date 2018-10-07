import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  abreFace(){
    window.open('https://www.facebook.com/bibliotecafalada/','_blank');
    }
  
  abreSite(){
    window.open('http://bibliotecafalada.com/','_blank'); 
  }

}


