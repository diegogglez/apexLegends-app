import { LegendsService } from './../../services/legends-service/legends.service';
import { Component, OnInit } from '@angular/core';
import PocketBase from 'pocketbase';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.scss']
})
export class LegendsComponent implements OnInit {

  myCharacters?: any[];

  /* getLegends() {
    this.legends.getAllLegends().then((result) => console.log(result))
  } */
  constructor(private legends: LegendsService) {
    // this.getLegends()
    this.legends.getAllLegends()
      .then((result) => this.myCharacters = [...result])
      .catch((error) => console.error(error));
  }


  
  


  ngOnInit(): void {
  }



}
