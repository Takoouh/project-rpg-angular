import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Place } from 'src/app/interfaces/place';
import { AppStore } from 'src/app/interfaces/store';
import { CharacterService } from 'src/app/services/character.service';
import { storeCharacterInfos } from 'src/app/store/character/character.actions';
import { selectCharacterGold, selectCharacterId, selectCharacterPlace } from 'src/app/store/character/character.selector';
import { TownInnComponent } from './components/town-inn/town-inn.component';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss']
})
export class TownComponent implements OnInit {

  currentTown$: Observable<Place>;
  characterGold: number = 0;
  characterId: number= 0;

  constructor(
    private store:Store<AppStore>,
    private characterService: CharacterService,
    public modal: MatDialog
  ) {
    this.currentTown$ = this.store.select(selectCharacterPlace);
    this.store.select(selectCharacterGold).subscribe(result=>this.characterGold = result)
    this.store.select(selectCharacterId).subscribe(result=> this.characterId=result)
   }

   openInnModal(){
    this.modal.open(TownInnComponent, {data: {
      restInInn: ()=> this.onRestInInn(),
      characterGold: this.characterGold
    }, })
   }


   onRestInInn():void {
    if(this.characterGold >= 15) {
        this.characterService.restInInn(this.characterId).subscribe(
          result=>{
            this.store.dispatch(storeCharacterInfos({character:result}));
            this.modal.closeAll();
          }
        )
    }
}
  ngOnInit(): void {
  }

}
