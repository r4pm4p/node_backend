import EntitiesInterface from "../interfaces/EntitiesInterface";
import Address from "../value-objects/Address";
import MapPosition from "../value-objects/MapPosition";

export default class Event implements EntitiesInterface {

    private name: string;
    private date: Date;
    private battle_id: number;

    constructor(battle_id: number, name: string, date: Date) {
        this.battle_id = battle_id;
        this.name = name;
        this.date = new Date(date)
    }

    public toDTO() {
        return {
            battle_id: this.battle_id,
            name: this.name,
            date: this.date,
        }
    }

}
