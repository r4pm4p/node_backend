import { Phone } from "../value-objects/Phone";

export class User {
  private id: string;
  private name: string;
  private email: string;
  private phone: Phone;
  private password: string;

  constructor(
    id: string,
    name: string,
    email: string,
    phone: Phone,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }

  protected updateEmail(new_email: string) {
    this.email = new_email;
  }
  protected updatePassword(new_password: string) {
    this.password = new_password;
  }
  protected changeName(new_name: string) {
    this.name = new_name;
  }
  protected changePhoneNumber(new_phone: Phone) {
    this.phone = new_phone;
  }
}
