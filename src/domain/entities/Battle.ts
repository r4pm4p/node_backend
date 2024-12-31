import EntitiesInterface from "../interfaces/EntitiesInterface";
import Address from "../value-objects/Address";
import MapPosition from "../value-objects/MapPosition";

export default class Battle implements EntitiesInterface {

    private name: string;
    private owner_id: string;
    private address: Address;
    private map_position: MapPosition;

    constructor(owner_id: string, name: string, address: Address, map_position: MapPosition) {
        this.owner_id = owner_id;
        this.name = name;
        this.address = new Address(address);
        this.map_position = new MapPosition(map_position)
    }

    protected changeBattleName(new_name: string) {
        this.name = new_name;
    }


    public toDTO() {
        return {
            owner_id: this.owner_id,
            name: this.name,
            address: this.address.toString(),
            map_position: this.map_position.toString()
        }
    }

}
