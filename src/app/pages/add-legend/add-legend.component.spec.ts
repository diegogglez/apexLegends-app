import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLegendComponent } from './add-legend.component';

describe('AddLegendComponent', () => {
  let component: AddLegendComponent;
  let fixture: ComponentFixture<AddLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLegendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
