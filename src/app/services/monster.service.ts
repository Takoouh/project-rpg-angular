import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Monster } from '../interfaces/monster';
import { handleError } from './serviceHelpers';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  constructor(private http: HttpClient) { }
  
  private characterUrl = 'https://project-rpg-api.herokuapp.com/monsters'

  getMonsters():Observable<Monster[]>{
    return this.http.get<Monster[]>(this.characterUrl).pipe(catchError(handleError<Monster[]>('getMonsters', [])))
  }


}
