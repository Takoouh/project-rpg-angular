import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Character, CharacterFile } from '../interfaces/character';
import { handleError } from './serviceHelpers';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characterUrl = 'https://project-rpg-api.herokuapp.com/characters'
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getCharacter(characterId:number):Observable<Character>{
    return this.http.get<Character>(`${this.characterUrl}/${characterId}`)
    .pipe(
      catchError(handleError<Character>('getCharacter'))
    )
  }

  getCharacters():Observable<CharacterFile[]>{
    return this.http.get<CharacterFile[]>(this.characterUrl)
    .pipe(
      catchError(handleError<CharacterFile[]>('getCharacters', []))
    )
  }

  createCharacter(name:string):Observable<Character>{
    return this.http.post<Character>(this.characterUrl, {name}, this.httpOptions)
    .pipe(
      catchError(handleError<Character>('createCharacter'))
    )
  }

  deleteCharacter(characterId:number):Observable<Character>{
    return this.http.delete<Character>(`${this.characterUrl}/${characterId}`)
    .pipe(
      catchError(handleError<Character>('deleteCharacter'))
    )
  }



  constructor(
    private http: HttpClient,
  ) { }
}
