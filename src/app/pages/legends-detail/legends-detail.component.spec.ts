import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsDetailComponent } from './legends-detail.component';

describe('LegendsDetailComponent', () => {
  let component: LegendsDetailComponent;
  let fixture: ComponentFixture<LegendsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
