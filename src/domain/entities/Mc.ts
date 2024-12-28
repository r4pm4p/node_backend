import EntitiesInterface from "../interfaces/EntitiesInterface";
import Address from "../value-objects/Address";

export default class Mc implements EntitiesInterface {

  private user_id: string;
  private streetname: string;
  private address: Address;

  constructor(user_id: string, streetname: string, address: Address) {
    this.user_id = user_id;
    this.streetname = streetname;
    this.address = new Address(address);
  }

  protected changeStreetName(new_streetname: string) {
    this.streetname = new_streetname;
  }


  public toDTO() {
    return {
      user_id: this.user_id,
      streetname: this.streetname,
      address: this.address.toString()
    }
  }

}
