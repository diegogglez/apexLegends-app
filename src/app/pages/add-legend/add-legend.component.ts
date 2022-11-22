import { LegendsService } from './../../services/legends-service/legends.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-legend',
  templateUrl: './add-legend.component.html',
  styleUrls: ['./add-legend.component.scss']
})
export class AddLegendComponent implements OnInit {
  newLegend: any = {
    name: '',
    card: ''
  }

  legendForm!: FormGroup;

  constructor(private legends: LegendsService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.legendForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      card: [''],
      detail: [''],
      tactic: [''],
      passive: [''],
      ultimate: [''],
      info: [''],
      passiveName: [''],
      tacticName: [''],
      ultimateName: ['']
    });

    this.legendForm.valueChanges.subscribe((changes) => {
      this.newLegend = changes;
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
    console.log('hola?', this.legendForm);
    const formData = new FormData();
    //formData.append('tacticName', this.legendForm.get('tacticName')?.value);
    //formData.append('passiveName', this.legendForm.get('passiveName')?.value);
    //formData.append('ultimateName', this.legendForm.get('ultimateName')?.value);
    const skills: any = {
      tactic: this.legendForm.get('tacticName')?.value, 
      passive: this.legendForm.get('passiveName')?.value,
      ultimate: this.legendForm.get('ultimateName')?.value
    };
    console.log(skills);
    
      
    formData.append('name', this.legendForm.get('name')?.value);
    formData.append('card', this.legendForm.get('card')?.value);
    formData.append('detail', this.legendForm.get('detail')?.value);
    formData.append('tactic', this.legendForm.get('tactic')?.value);
    formData.append('passive', this.legendForm.get('passive')?.value);
    formData.append('ultimate', this.legendForm.get('ultimate')?.value);
    formData.append('info', this.legendForm.get('info')?.value);
    formData.append('skills', JSON.stringify(skills));

    console.log('formData-->',formData.get('skills'));
    this.legends.addLegend(formData).subscribe();    
  }
}
