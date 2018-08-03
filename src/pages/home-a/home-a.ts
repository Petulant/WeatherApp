import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ProWeatherProvider } from '../../providers/pro-weather/pro-weather';

/**
 * Generated class for the HomeAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-a',
  templateUrl: 'home-a.html',
})
export class HomeAPage {


  weatherInfo;
  Place="pretoria";



 constructor(public navCtrl: NavController, public navParams: NavParams,private data : ProWeatherProvider) { 

  this.data.PretoriaW(this.Place).subscribe(dataInfo =>{
    console.log(dataInfo)
    this.weatherInfo=dataInfo;
    console.log(this.weatherInfo);
  });

 

 }
 doRefresh(refresher){
  console.log('Begin async operation',refresher);

  setTimeout(()=>{
    console.log('Async operation has ended');
    refresher.complete();
  },2000);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAPage');
  }

  onInput(){
 
    this.data.PretoriaW(this.Place).subscribe(dataInfo=>{
    this.weatherInfo=dataInfo;
    console.log(this.Place);
    })
  

  }
  nextPage(){
    this.navCtrl.push('HomePage',{variable:this.Place});
 
}
} 
