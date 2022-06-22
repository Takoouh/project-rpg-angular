import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfosComponent } from './character-infos/character-infos.component';
import { CharactersFileComponent } from './characters-file/characters-file.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MistArenaComponent } from './mist-arena/mist-arena.component';


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
