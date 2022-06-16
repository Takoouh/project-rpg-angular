import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters-file',
  templateUrl: './characters-file.component.html',
  styleUrls: ['./characters-file.component.scss']
})
export class CharactersFileComponent implements OnInit {

  characters: Character[] = [];

  
  selectedCharacter?: Character;
  onSelect(characterId: number): void {
    this.selectedCharacter = this.characters.find(character => character.id === characterId)
  }

  getCharacters(): void {
    this.characterService.getCharacters()
    .subscribe(characters => this.characters = characters);
  }

  constructor(private characterService: CharacterService) { }


  ngOnInit(): void {
    this.getCharacters();
  }

}
