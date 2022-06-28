import { Component, Input, OnInit } from '@angular/core';
import { MonsterInBattle } from 'src/app/interfaces/monster';

@Component({
  selector: 'app-monster-frame',
  templateUrl: './monster-frame.component.html',
  styleUrls: ['../unit-frame.component.scss']
})
export class MonsterFrameComponent implements OnInit {

  @Input() unit?: MonsterInBattle;
  
  constructor() { }

  ngOnInit(): void {
  }

}
