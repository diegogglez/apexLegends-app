import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class LegendsService {

  public pb = new PocketBase('http://127.0.0.1:8090');

  constructor(private http: HttpClient) {} 

  public getAllLegends() {  
    //console.log('ejecuto el servicio');
    return this.pb.collection('legends').getFullList();   
  }

  public getOneLegend(id: string) {
    // return this.pb.collection('legends').getOne(id);
    return this.http.get('http://127.0.0.1:8090/api/collections/legends/records/'+ id)
  }

  public addLegend(data: any) {
    //return.this.pb.collection('legends').create(data);
    return this.http.post('http://127.0.0.1:8090/api/collections/legends/records', data);
  }

  public deleteLegend(id: string) {
    //return this.pb.collection('legends').delete(id);
    return this.http.delete('http://127.0.0.1:8090/api/collections/legends/records/'+ id);
  }

  public updateLegend(id: string, updatedLegend: any) {
    return this.pb.collection('legends').update(id, updatedLegend);
    //return  this.http.put('http://127.0.0.1:8090/api/collections/legends/records/'+ id, updatedLegend);
  }


}
