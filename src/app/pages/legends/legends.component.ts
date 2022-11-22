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

  constructor(private legends: LegendsService) {
    this.legends.getAllLegends()
      .then((result) => {
        this.myCharacters = [...result];
        console.log(result);
        
      })
      .catch((error) => console.error(error));
  }

  ngOnInit(): void {
  }
}
