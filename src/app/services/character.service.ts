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
  
  constructor(
    private http: HttpClient,
  ) { }

  
  private characterUrl = 'http://localhost:3000/characters'
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

  reviveCharacter(characterId:number):Observable<Character>{
    return this.http.patch<Character>(`${this.characterUrl}/${characterId}/revive`, {}).pipe(
      catchError(handleError<Character>('reviveCharacter'))
    )
  }

  restInInn(characterId:number):Observable<Character>{
    return this.http.patch<Character>(`${this.characterUrl}/${characterId}/rest-in-inn`, {}).pipe(
      catchError(handleError<Character>('restInInn'))
    )
  }



}
