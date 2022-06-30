import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStore } from 'src/app/interfaces/store';
import { CharacterService } from 'src/app/services/character.service';
import { reviveAndUpdateCharacter } from 'src/app/store/character/character.actions';
import { selectCharacterId, selectCharacterName } from 'src/app/store/character/character.selector';
import { activateLoading, disactivateLoading } from 'src/app/store/isLoading/isLoading.actions';

@Component({
  selector: 'app-resurrection-altar',
  templateUrl: './resurrection-altar.component.html',
  styleUrls: ['./resurrection-altar.component.scss']
})
export class ResurrectionAltarComponent implements OnInit {

  characterName$:Observable<String>;
  characterId$:Observable<number>;

  textApparitionClass1:string = "";
  textApparitionClass2:string = "";
  textApparitionClass3:string = "";
  textApparitionClass4:string = "";
  textApparitionClass5:string = "";
  disappearingClass:string="";

  constructor(private store:Store<AppStore>,
    private characterService: CharacterService) { 
    this.characterName$ = this.store.select(selectCharacterName)
    this.characterId$ = this.store.select(selectCharacterId);
  }

  onReviveBtnClick(characterId:number):void {
    this.disappearingClass = " resurrection_altar--dismounting"
    this.store.dispatch(activateLoading());
    this.characterService.reviveCharacter(characterId)
      .subscribe(result=> {
        setTimeout(()=>
         {
           this.store.dispatch(disactivateLoading());
          this.store.dispatch(reviveAndUpdateCharacter({character:{...result, isCharacterDead:false}}))
        },1500)});
  }

  ngOnInit(): void {
    setTimeout(()=>this.textApparitionClass1=" resurrection_altar--appearing", 1500)
    setTimeout(()=>this.textApparitionClass2=" resurrection_altar--appearing", 3000)
    setTimeout(()=>this.textApparitionClass3=" resurrection_altar--appearing", 4500)
    setTimeout(()=>this.textApparitionClass4=" resurrection_altar--appearing", 6000)
    setTimeout(()=>this.textApparitionClass5=" resurrection_altar--appearing", 7500)
  }

}
