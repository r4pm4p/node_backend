import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Mc implements EntitiesInterface {
  private user_id: string;
  private streetname: string;

  constructor(user_id: string, streetname: string) {
    this.user_id = user_id;
    this.streetname = streetname;
  }

  protected changeStreetName(new_streetname: string) {
    this.streetname = new_streetname;
  }

  public toDTO() {
    return {
      user_id: this.user_id,
      streetname: this.streetname
    }
  }

}
