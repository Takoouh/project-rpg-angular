export interface ItemFromApi {
    id: number;
    desc: string;
    name: string;
    price: number;
    speed: number;
    strength: number;
    subtype?: string;
    type: string;
}

export interface ItemOnCharacter {
    id:number;
    characterId:number;
    itemId:number;
    quantity:number;
	item: ItemFromApi
}
