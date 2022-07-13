import { Component, Input, OnInit } from '@angular/core';
import { battleRewardData } from 'src/app/interfaces/battle';
import { Character } from 'src/app/interfaces/character';

@Component({
	selector: 'app-battle-modal-reward',
	templateUrl: './battle-modal-reward.component.html',
	styleUrls: ['../../battle-modal.component.scss'],
})
export class BattleModalRewardComponent implements OnInit {
	@Input() character?: Character;
	@Input() battleReward?: battleRewardData;

	constructor() {}

	ngOnInit(): void {}
}
