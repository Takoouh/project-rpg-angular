import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleModalRewardComponent } from './battle-modal-reward.component';

describe('BattleModalRewardComponent', () => {
  let component: BattleModalRewardComponent;
  let fixture: ComponentFixture<BattleModalRewardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleModalRewardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BattleModalRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
