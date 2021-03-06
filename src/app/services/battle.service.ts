import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BattleData, BattleSetUpData } from '../interfaces/battle';
import { handleError } from './serviceHelpers';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  private battleUrl:string = 'http://localhost:3000/battle'

  constructor(private http:HttpClient) { }

  initBattle(characterId:number, monsterId:number):Observable<BattleSetUpData>{
    return this.http.post<BattleSetUpData>(`${this.battleUrl}/${characterId}/${monsterId}`, {}).pipe(catchError(handleError<BattleSetUpData>('initBattle')))
  }

  checkCharacterBattle(characterId:number):Observable<BattleSetUpData>{
    return this.http.get<BattleSetUpData>(`${this.battleUrl}/${characterId}`).pipe(catchError(handleError<BattleSetUpData>('checkCharacterBattle')))
  }

  playerAttack(battleId:number):Observable<BattleData>{
    return this.http.patch<BattleData>(`${this.battleUrl}/${battleId}/attack`, {}).pipe(catchError(handleError<BattleData>('playerAttack')))
  }
}
