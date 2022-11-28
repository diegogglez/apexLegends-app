import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LegendsService } from './../../services/legends-service/legends.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-legend',
  templateUrl: './update-legend.component.html',
  styleUrls: ['./update-legend.component.scss']
})
export class UpdateLegendComponent implements OnInit {

  legendForm!: FormGroup;
  updatedLegend!: any;
  id: any;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private legends: LegendsService, 
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.updatedLegend = this.legends.getOneLegend(this.id).subscribe((data) => {
        console.log('data-->',data);
        this.updatedLegend = data; 
        
        this.legendForm = this.formBuilder.group({
          name: [this.updatedLegend?.name, [Validators.required]],
          card: [this.updatedLegend?.card, [Validators.required]],
          detail: [this.updatedLegend?.detail],
          tactic: [this.updatedLegend?.tactic],
          passive: [this.updatedLegend?.passive],
          ultimate: [this.updatedLegend?.ultimate],
          info: [this.updatedLegend?.info, [Validators.required]],
          tacticName: [this.updatedLegend?.skills.tactic, [Validators.required]],
          passiveName: [this.updatedLegend?.skills.passive, [Validators.required]],
          ultimateName: [this.updatedLegend?.skills.ultimate, [Validators.required]]
        });
      });
    });


    this.legendForm.valueChanges.subscribe((changes) => {
      this.updatedLegend = changes;
    })
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log('file-->',file);
    console.log(event.target.name);
    this.legendForm.patchValue({
      [event?.target?.name]: file
    })
  }

  onSubmit() {
    const formData = new FormData();
    const skills: any = {
      tactic: this.legendForm.get('tacticName')?.value, 
      passive: this.legendForm.get('passiveName')?.value,
      ultimate: this.legendForm.get('ultimateName')?.value
    };
    
    formData.append('name', this.legendForm.get('name')?.value);
    formData.append('card', this.legendForm.get('card')?.value);
    formData.append('detail', this.legendForm.get('detail')?.value);
    formData.append('tactic', this.legendForm.get('tactic')?.value);
    formData.append('passive', this.legendForm.get('passive')?.value);
    formData.append('ultimate', this.legendForm.get('ultimate')?.value);
    formData.append('info', this.legendForm.get('info')?.value);
    formData.append('skills', JSON.stringify(skills));

    console.log('formDatau-->',formData);
    this.legends.updateLegend(this.id, formData); 
    this.router.navigate(['/legends']);   
  }

  

}
