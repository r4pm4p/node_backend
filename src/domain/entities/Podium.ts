import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Podium implements EntitiesInterface {

    private event_id: number;
    private fst_place_id: number;
    private scd_place_id: number;
    private thd_place_id: number;

    constructor(event_id: number, fst_place_id: number, scd_place_id: number, thd_place_id: number) {
        this.event_id = event_id;
        this.fst_place_id = fst_place_id;
        this.scd_place_id = scd_place_id;
        this.thd_place_id = thd_place_id;
    }


    public toDTO() {
        return {
            event_id: this.event_id,
            fst_place_id: this.fst_place_id,
            scd_place_id: this.scd_place_id,
            thd_place_id: this.thd_place_id
        }
    }

}
