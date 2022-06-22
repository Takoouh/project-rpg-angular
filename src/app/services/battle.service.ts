import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { BattleData } from '../interfaces/battle';
import { handleError } from './serviceHelpers';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  private battleUrl:string = 'http://localhost:3000/battle'

  constructor(private http:HttpClient) { }

  initBattle(characterId:number, monsterId:number):Observable<BattleData>{
    return this.http.post<BattleData>(`${this.battleUrl}/${characterId}/${monsterId}`, {}).pipe(catchError(handleError<BattleData>('initBattle')))
  }
}
