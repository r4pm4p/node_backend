import Follower from "../../domain/entities/Follower";
import ModelRepository from "../../domain/repository/ModelRepository";
import BattleFollowers from "../dto/BattleFollowers";
import McFollowers from "../dto/McFollowers";

export default class FollowersRepositoryImplementation implements ModelRepository {
    public findAll(): Promise<Array<any>> {
        throw new Error("errr")
    }

    public findById(id: string): Promise<any> {
        throw new Error("errr")
    }

    public async save(follower: Follower): Promise<void> {
        try {
            if (follower.getType() == "mc") {
                var followerDTO = new McFollowers(follower.toDTO());
            } else {
                var followerDTO = new BattleFollowers(follower.toDTO());
            }

            await followerDTO.save();
        } catch (e) {
            throw e
        }
    }

    public async delete(id: string): Promise<boolean> {
        throw new Error("errr")
    }
}