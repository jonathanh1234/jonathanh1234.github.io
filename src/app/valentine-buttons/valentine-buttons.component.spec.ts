import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineButtonsComponent } from './valentine-buttons.component';

describe('ValentineButtonsComponent', () => {
  let component: ValentineButtonsComponent;
  let fixture: ComponentFixture<ValentineButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValentineButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValentineButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
