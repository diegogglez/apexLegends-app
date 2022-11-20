import { Component, OnInit } from '@angular/core';
import PocketBase from 'pocketbase';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss']
})
export class LegendsComponent implements OnInit {

  myCharacters?: any[];
  public pb = new PocketBase('http://127.0.0.1:8090');


  constructor() { 

    const getAllCharacters = async() => {
      const result = await this.pb.collection('legends').getFullList();
      console.log(result); 
      this.myCharacters = [...result]    
    }
    getAllCharacters();

  }

  ngOnInit(): void {
  }



}
