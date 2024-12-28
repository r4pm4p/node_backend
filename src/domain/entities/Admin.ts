import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Admin implements EntitiesInterface {
  private user_id: string;

  constructor(user_id: string) {
    this.user_id = user_id;
  }

  public toDTO() {
    return {
      user_id: this.user_id
    }
  }
}
