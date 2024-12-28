export default class Address {
  private street: string;
  private number: string;
  private city: string;
  private state: string;
  private zipcode: string;

  constructor(address: Object) {
    //@ts-expect-error
    const { street, number, city, state, zipcode } = { ...address }
    this.street = street
    this.number = number
    this.city = city
    this.state = state
    this.zipcode = zipcode
  }


  public toString() {
    return `${this.street}, ${this.number}, ${this.city}-${this.state}, ${this.zipcode}`
  }

}
