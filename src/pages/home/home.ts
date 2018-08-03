import { ProWeatherProvider } from './../../providers/pro-weather/pro-weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  weatherInfo;
  Place="pretoria";
  Temp;
  kelviF;
  kelviC;
  convertion;

 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private data : ProWeatherProvider ) {
 console.log(navParams.get("variable"));
    this.Place=navParams.get("variable");

    this.data.PretoriaW(this.Place).subscribe(dataInfo =>{
      console.log(dataInfo)
      this.weatherInfo=dataInfo;
  this.Temp=this.weatherInfo.main.temp
    });


    }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

  // changeMethod(){
  //   console.log(this.Place);
  //   this.data.PretoriaW(this.Place).subscribe(dataInfo=>{
  //   this.weatherInfo=dataInfo;
  //   })

  // }
  changeTemp(){
console.log(this.convertion);
    if(this.convertion=="value1"){
    this.kelviF=Math.floor((this.Temp - 273.15) * 1.8 +32);
    }else if(this.convertion=="value2"){
      this.kelviC=Math.floor(this.Temp - 273.15);
    }
  

  }
}