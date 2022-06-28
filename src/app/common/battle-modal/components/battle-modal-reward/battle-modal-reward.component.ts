import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-battle-modal-reward',
  templateUrl: './battle-modal-reward.component.html',
  styleUrls: ["../../battle-modal.component.scss"]
})
export class BattleModalRewardComponent implements OnInit {
  @Input() character?:Character

  constructor() { 
    }

  ngOnInit(): void {
  }

}
