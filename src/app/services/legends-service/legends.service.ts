import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class LegendsService {

  public pb = new PocketBase('http://127.0.0.1:8090');

  constructor() {} 

  public getAllLegends() {  
    //console.log('ejecuto el servicio');
    return this.pb.collection('legends').getFullList();   
  }

  public getOneLegend(id: string) {
    return this.pb.collection('legends').getOne(id)
  }
}
