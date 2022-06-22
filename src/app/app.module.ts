import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { characterReducer } from './store/character.reducer';
import { monstersReducer } from './store/monsters.reducer';

import { AppComponent } from './app.component';
import { CharactersFileComponent, CharactersFileDeleteModal } from './characters-file/characters-file.component';
import { CharacterCreationComponent, CharactersCreationModal } from './character-creation/character-creation.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterInfosComponent } from './character-infos/character-infos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MistArenaBattleConfirmationModal, MistArenaComponent } from './mist-arena/mist-arena.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersFileComponent,
    CharacterCreationComponent,
    CharactersCreationModal,
    CharactersFileDeleteModal,
    CharacterInfosComponent,
    NavbarComponent,
    HomepageComponent,
    MistArenaComponent,
    MistArenaBattleConfirmationModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //material module
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    //Reducer
    StoreModule.forRoot({character: characterReducer, monsters: monstersReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Project-rpg App'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
