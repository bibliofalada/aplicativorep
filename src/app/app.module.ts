import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AdminPage } from '../pages/admin/admin';
import { NgSrcModule } from 'ng-src';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ProducoesProvider } from '../providers/producoes/producoes';
import { MenuPageModule } from '../pages/menu/menu.module';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory } from 'ionic-audio';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdminPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyAZETU5UZh0TYPZS1ubsZ9bR0aXZlZcYys",
    authDomain: "biblioapp-970c6.firebaseapp.com",
    databaseURL: "https://biblioapp-970c6.firebaseio.com",
    projectId: "biblioapp-970c6",
    storageBucket: "biblioapp-970c6.appspot.com",
    messagingSenderId: "558551727680"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    MenuPageModule,
    NgSrcModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AdminPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProducoesProvider
  ]
})
export class AppModule {}
