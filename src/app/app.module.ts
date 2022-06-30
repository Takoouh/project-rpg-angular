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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { characterReducer } from './store/character/character.reducer';
import { monstersReducer } from './store/monsters/monsters.reducer';
import { battleReducer } from './store/battle/battle.reducer';

import { AppComponent } from './app.component';
import { CharactersFileComponent, CharactersFileDeleteModal } from './core/characters-file/characters-file.component';
import { CharacterCreationComponent, CharactersCreationModal } from './core/characters-file/components/character-creation/character-creation.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterInfosComponent } from './core/character-infos/character-infos.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { MistArenaBattleConfirmationModal, MistArenaComponent } from './core/mist-arena/mist-arena.component';
import { BattleModalComponent } from './common/battle-modal/battle-modal.component';
import { CharacterFrameComponent } from './common/unit-frame/character-frame/character-frame.component';
import { MonsterFrameComponent } from './common/unit-frame/monster-frame/monster-frame.component';
import { BattleModalRewardComponent } from './common/battle-modal/components/battle-modal-reward/battle-modal-reward.component';
import { BattleLostModalComponent } from './common/battle-modal/components/battle-lost-modal/battle-lost-modal.component';
import { ResurrectionAltarComponent } from './core/resurrection-altar/resurrection-altar.component';
import { LoaderComponent } from './common/loader/loader.component';
import { isLoadingReducer } from './store/isLoading/isLoading.reducer';

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
    MistArenaBattleConfirmationModal,
    BattleModalComponent,
    CharacterFrameComponent,
    MonsterFrameComponent,
    BattleModalRewardComponent,
    BattleLostModalComponent,
    ResurrectionAltarComponent,
    LoaderComponent
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
    MatProgressSpinnerModule,
    //Reducer
    StoreModule.forRoot({character: characterReducer, monsters: monstersReducer, battle: battleReducer, isLoading: isLoadingReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Project-rpg App'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
