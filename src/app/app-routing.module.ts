import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfosComponent } from './character-infos/character-infos.component';
import { CharactersFileComponent } from './characters-file/characters-file.component';


const routes:Routes = !localStorage.getItem("currentCharacterId")?
[{path: '', component: CharactersFileComponent},{path:"**", redirectTo:"/"}]

:[
  {path: 'characters', component: CharactersFileComponent},
  {path: 'character-infos', component: CharacterInfosComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
