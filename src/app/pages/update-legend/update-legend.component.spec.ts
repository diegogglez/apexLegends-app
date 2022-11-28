import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLegendComponent } from './update-legend.component';

describe('UpdateLegendComponent', () => {
  let component: UpdateLegendComponent;
  let fixture: ComponentFixture<UpdateLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLegendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
