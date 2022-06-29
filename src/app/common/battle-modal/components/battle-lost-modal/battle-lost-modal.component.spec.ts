import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleLostModalComponent } from './battle-lost-modal.component';

describe('BattleLostModalComponent', () => {
  let component: BattleLostModalComponent;
  let fixture: ComponentFixture<BattleLostModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleLostModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleLostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
