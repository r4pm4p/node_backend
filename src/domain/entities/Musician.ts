export class Musician {
  private user_id: string;
  private street_name: string;

  constructor(user_id: string, street_name: string) {
    this.user_id = user_id;
    this.street_name = street_name;
  }

  protected changeStreetName(new_street_name: string) {
    this.street_name = new_street_name;
  }
}
