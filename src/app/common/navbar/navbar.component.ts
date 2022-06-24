import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCharacterInfos } from '../../store/character/character.actions';
import { selectCharacter } from '../../store/character/character.selector';
import { Character } from '../../interfaces/character';
import { AppStore } from '../../interfaces/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  character$:Observable<Character>;

  constructor(private store:Store<AppStore>) {
    this.character$=this.store.select(selectCharacter);
   }

  
  isPlayerLogged= localStorage.getItem("currentCharacterId");

  onLogout():void{
    localStorage.removeItem('currentCharacterId');
    this.store.dispatch(deleteCharacterInfos());
    location.reload();
  }

  ngOnInit(): void {
  }

}
