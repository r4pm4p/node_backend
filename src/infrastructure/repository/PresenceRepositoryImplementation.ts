import Presence from "../../domain/entities/Presence";
import ModelRepository from "../../domain/repository/ModelRepository";
import McPresencelistDTO from "../dto/McPresencelistDTO";
import WatchlistDTO from "../dto/WatchlistDTO";

export default class PresenceRepositoryImplementation implements ModelRepository {
    public findAll(): Promise<Array<any>> {
        throw new Error("errr")
    }

    public findById(id: string): Promise<any> {
        throw new Error("errr")
    }

    public async save(presence: Presence): Promise<void> {
        try {
            if (presence.getType() == "watch") {
                var presenceDTO = new WatchlistDTO(presence.toDTO());
            } else {
                var presenceDTO = new McPresencelistDTO(presence.toDTO());
            }

            await presenceDTO.save();
        } catch (e) {
            throw e
        }
    }

    public async delete(id: string): Promise<boolean> {
        throw new Error("errr")
    }
}