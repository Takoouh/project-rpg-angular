import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersFileComponent } from './characters-file/characters-file.component';


const routes:Routes = !localStorage.getItem("currentCharacterId")?
[{path: '', component: CharactersFileComponent},{path:"**", redirectTo:"/"}]

:[
  {path: 'characters', component: CharactersFileComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
