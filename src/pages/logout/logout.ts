import { Component } from '@angular/core';
import {App} from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})

export class LogoutPage {
	constructor(private app:App){ }
	logout(){
	//clear any cached data
	this.app.getRootNav().setRoot(LoginPage);
  }
	loginPage=LoginPage; 
  
}



