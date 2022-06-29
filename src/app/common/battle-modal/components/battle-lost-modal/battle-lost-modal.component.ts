import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/interfaces/store';
import { sendCharacterToDeath } from 'src/app/store/character/character.actions';

@Component({
  selector: 'app-battle-lost-modal',
  templateUrl: './battle-lost-modal.component.html',
  styleUrls: ['../../battle-modal.component.scss']
})
export class BattleLostModalComponent implements OnInit {

  constructor(private store:Store<AppStore>) { }

  /**
   * Trigger action to store death of Character
   */
  onFollowLightBtnClick():void{
    this.store.dispatch(sendCharacterToDeath());
  }

  ngOnInit(): void {
  }

}
