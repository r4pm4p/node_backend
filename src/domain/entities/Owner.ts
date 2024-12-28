import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Owner implements EntitiesInterface {

  private userId: string;

  constructor(userId: string) {
    this.userId = userId;
  }

  public toDTO = () => {
    return {
      user_id: this.userId
    }
  }
}
