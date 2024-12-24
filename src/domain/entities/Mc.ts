export class Mc {
  private userId: string;
  private streetname: string;

  constructor(userId: string, streetname: string) {
    this.userId = userId;
    this.streetname = streetname;
  }

  protected changeStreetName(new_streetname: string) {
    this.streetname = new_streetname;
  }
}
