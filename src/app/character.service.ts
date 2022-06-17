import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CHARACTERS } from './mock-character';
import { Character } from './interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characterUrl = 'http://localhost:3000/characters'
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  getCharacters():Observable<Character[]>{
    return this.http.get<Character[]>(this.characterUrl)
    .pipe(
      catchError(this.handleError<Character[]>('getCharacters', []))
    )
  }

  createCharacter(name:string):Observable<Character>{
    return this.http.post<Character>(this.characterUrl, {name}, this.httpOptions)
    .pipe(
      catchError(this.handleError<Character>('createCharacter'))
    )
  }

  deleteCharacter(characterId:number):Observable<Character>{
    return this.http.delete<Character>(`${this.characterUrl}/${characterId}`)
    .pipe(
      catchError(this.handleError<Character>('deleteCharacter'))
    )
  }

  /**
   * Handle Http operation that failed
   * Let the app continue.
   * 
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation='operation', result?:T) {
    return (error:any): Observable<T> => {
      console.error(`${operation} failed : ${error.message}`);
      return of(result as T)
    }
  }

  constructor(
    private http: HttpClient,
  ) { }
}
