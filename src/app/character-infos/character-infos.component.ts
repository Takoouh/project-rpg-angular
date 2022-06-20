import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCharacter } from '../character.selector';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-character-infos',
  templateUrl: './character-infos.component.html',
  styleUrls: ['./character-infos.component.css']
})
export class CharacterInfosComponent implements OnInit {
  character$: Observable<Character>;
  constructor(private store:Store) {    
  this.character$=this.store.select(selectCharacter)
  }





  ngOnInit(): void {}

}
