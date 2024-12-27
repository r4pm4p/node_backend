import EntitiesInterface from "../interfaces/EntitiesInterface";

export default class Mc implements EntitiesInterface {
  private userId: string;
  private streetname: string;

  constructor(userId: string, streetname: string) {
    this.userId = userId;
    this.streetname = streetname;
  }

  protected changeStreetName(new_streetname: string) {
    this.streetname = new_streetname;
  }

  public toDTO() {
    return {
      userId: this.userId,
      streetname: this.streetname
    }
  }

}
