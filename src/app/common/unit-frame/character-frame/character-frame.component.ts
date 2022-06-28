import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-frame',
  templateUrl: './character-frame.component.html',
  styleUrls: ['../unit-frame.component.scss']
})
export class CharacterFrameComponent implements OnInit {

  @Input() unit?: Character;
  @Input() whiteMode?: boolean;
  @Input() hideName?: boolean = false;

  constructor() { }

    unitFrameClasses:string = ""; 

  ngOnInit(): void {    
    this.unitFrameClasses = this.whiteMode ? "unit-status unit-status--white" : "unit-status" 
  }

}
