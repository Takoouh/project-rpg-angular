import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResurrectionAltarComponent } from './resurrection-altar.component';

describe('ResurrectionAltarComponent', () => {
  let component: ResurrectionAltarComponent;
  let fixture: ComponentFixture<ResurrectionAltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResurrectionAltarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResurrectionAltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
