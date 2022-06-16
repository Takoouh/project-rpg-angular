import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-creation',
  templateUrl: './character-creation.component.html',
  styleUrls: ['./character-creation.component.scss']
})
export class CharacterCreationComponent implements OnInit {

  newCharacterName:string = '';
  isCharacterCreationFormOpen:boolean = false;
  onCharacterCreationFormToggle():void{
    this.isCharacterCreationFormOpen =!this.isCharacterCreationFormOpen
  }

  createNewCharacter():void {
    if(this.newCharacterName){
      this.characterService.createCharacter(this.newCharacterName.trim()).subscribe(()=>this.onCharacterCreationFormToggle)
      this.onCharacterCreationFormToggle();
    }
  }


  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

}
