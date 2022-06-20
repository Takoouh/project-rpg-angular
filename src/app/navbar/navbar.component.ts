import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { deleteCharacterInfos } from '../character.actions';
import { Character } from '../interfaces/character';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private store:Store<{character:Character}>) { }

  
  isPlayerLogged= localStorage.getItem("currentCharacterId");

  onLogout():void{
    localStorage.removeItem('currentCharacterId');
    this.store.dispatch(deleteCharacterInfos());
    location.reload();
  }

  ngOnInit(): void {
  }

}
