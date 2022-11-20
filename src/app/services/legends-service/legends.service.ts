import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class LegendsService {

  private pb = new PocketBase('http://127.0.0.1:8090');
/* 
  constructor() {

    getAllLegends(): <promise>() => {
      this.pb.collection('legends').getFullList();
    }
  } */
}
