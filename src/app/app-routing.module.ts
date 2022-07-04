import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfosComponent } from './core/character-infos/character-infos.component';
import { CharactersFileComponent } from './core/characters-file/characters-file.component';
import { BeginnerBookComponent } from './core/beginner-book/beginner-book.component';
import { MistArenaComponent } from './core/mist-arena/mist-arena.component';
import { TownComponent } from './core/town/town.component';


const routes:Routes = !localStorage.getItem("currentCharacterId")?
[{path: '', component: CharactersFileComponent},{path:"**", redirectTo:"/"}]

:[
  {path: '', redirectTo:"town", pathMatch:'full'},
  {path: 'town', component: TownComponent},
  {path: 'characters', component: CharactersFileComponent},
  {path: 'character-infos', component: CharacterInfosComponent},
  {path: 'beginner-book', component: BeginnerBookComponent},
  {path: 'mist-arena', component: MistArenaComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
