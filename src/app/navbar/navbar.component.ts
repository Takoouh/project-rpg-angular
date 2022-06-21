import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteCharacterInfos } from '../character.actions';
import { selectCharacter } from '../character.selector';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  character$:Observable<Character>
  constructor(private store:Store<{character:Character}>) {
    this.character$=this.store.select(selectCharacter)
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
