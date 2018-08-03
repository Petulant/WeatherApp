import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProWeatherProvider {



  constructor(public http: HttpClient) {
    console.log('Hello ProWeatherProvider Provider');


    
   
  }
PretoriaW(Place:string){
  return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+Place+'&APPID=6cd36c186b58ca0f6c37428b69ff544b');
}

}
