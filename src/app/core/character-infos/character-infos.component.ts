import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCharacter } from '../../store/character/character.selector';
import { Character } from '../../interfaces/character';
import { CharacterService } from 'src/app/services/character.service';
import { activateLoading, disactivateLoading } from 'src/app/store/isLoading/isLoading.actions';
import { storeCharacterInfos } from 'src/app/store/character/character.actions';

@Component({
	selector: 'app-character-infos',
	templateUrl: './character-infos.component.html',
	styleUrls: ['./character-infos.component.scss'],
})
export class CharacterInfosComponent implements OnInit {
	character$: Observable<Character>;

	constructor(private store: Store, private characterService: CharacterService) {
		this.character$ = this.store.select(selectCharacter);
	}

	/**
	 * @param {number} characterId
	 * @param {string} stat strength/speed/intelligence
	 */
	onSkillPointAttribution(characterId: number, stat: string): void {
		this.store.dispatch(activateLoading());
		this.characterService.attributeSkillPoint(characterId, stat).subscribe((result) => {
			this.store.dispatch(storeCharacterInfos({ character: result }));
			this.store.dispatch(disactivateLoading());
		});
	}

	ngOnInit(): void {}
}
