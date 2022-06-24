import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfosComponent } from './core/character-infos/character-infos.component';
import { CharactersFileComponent } from './core/characters-file/characters-file.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { MistArenaComponent } from './core/mist-arena/mist-arena.component';


const routes:Routes = !localStorage.getItem("currentCharacterId")?
[{path: '', component: CharactersFileComponent},{path:"**", redirectTo:"/"}]

:[
  {path: '', component: HomepageComponent},
  {path: 'characters', component: CharactersFileComponent},
  {path: 'character-infos', component: CharacterInfosComponent},
  {path: 'mist-arena', component: MistArenaComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
