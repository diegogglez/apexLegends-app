import { LegendsService } from './../../services/legends-service/legends.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-legends-detail',
  templateUrl: './legends-detail.component.html',
  styleUrls: ['./legends-detail.component.scss']
})
export class LegendsDetailComponent implements OnInit {

  id: any;
  myLegend: any;

  constructor(private activateRoute: ActivatedRoute, private legends: LegendsService, private router: Router) {
    this.activateRoute.paramMap.subscribe((params) => this.id = params?.get('id')) //* accedemos a la id a través de activateRoute (?)
    this.legends.getOneLegend(this.id)
      .subscribe((result) => {
        this.myLegend = result
        console.log(result);
        
      })
      // .catch((error) => console.error(error));
  }

  ngOnInit(): void {
  }

  deleteLegend() {
    this.legends.deleteLegend(this.id).subscribe();
    this.router.navigate(['/legends']);
  }
}
