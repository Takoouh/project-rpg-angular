import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface TownInnData {
    restInInn: VoidFunction;
    characterGold: number
}

@Component({
  selector: 'app-town-inn',
  templateUrl: './town-inn.component.html',
  styleUrls: ['../../town.component.scss']
})
export class TownInnComponent implements OnInit {

  constructor(
        @Inject(MAT_DIALOG_DATA) public data: TownInnData
    ) {}

    hasEnoughGoldToRest: boolean = this.data.characterGold >= 15

  ngOnInit(): void {
  }

}
