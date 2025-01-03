import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Follower implements EntitiesInterface {
    private user_id: number;
    private toFollow_id: number;
    private type: string;

    constructor(user_id: number, toFollow_id: number, type: string) {
        this.user_id = user_id;
        this.toFollow_id = toFollow_id;
        this.type = type
    }

    public getType = () => {
        return this.type
    }

    public toDTO = () => {

        if (this.type == "mc")
            return {
                "user_id": this.user_id,
                "mc_id": this.toFollow_id
            }

        else
            return {
                "user_id": this.user_id,
                "battle_id": this.toFollow_id
            }
    }
}