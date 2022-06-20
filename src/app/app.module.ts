import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { characterReducer } from './character.reducer';

import { AppComponent } from './app.component';
import { CharactersFileComponent, CharactersFileDeleteModal } from './characters-file/characters-file.component';

import { CharacterCreationComponent, CharactersCreationModal } from './character-creation/character-creation.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CharacterInfosComponent } from './character-infos/character-infos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersFileComponent,
    CharacterCreationComponent,
    CharactersCreationModal,
    CharactersFileDeleteModal,
    CharacterInfosComponent,
    NavbarComponent,
    HomepageComponent
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
    //Reducer
    StoreModule.forRoot({character: characterReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Project-rpg App'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
