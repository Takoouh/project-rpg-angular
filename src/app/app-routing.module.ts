import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersFileComponent } from './characters-file/characters-file.component';


const routes:Routes = [
  {path: 'characters', component: CharactersFileComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
