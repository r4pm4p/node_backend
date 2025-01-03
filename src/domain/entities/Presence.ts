import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Presence implements EntitiesInterface {

    private toConfirm_id: number;
    private event_id: number;
    private type: string;

    constructor(toConfirm_id: number, event_id: number, type: string) {
        this.toConfirm_id = toConfirm_id;
        this.event_id = event_id;
        this.type = type;
    }

    public getType = () => {
        return this.type;
    }

    public toDTO() {
        if (this.type == "watch") {
            return {
                "user_id": this.toConfirm_id,
                "event_id": this.event_id,
            }
        } else {
            return {
                "mc_id": this.toConfirm_id,
                "event_id": this.event_id,
            }
        }
    }
}