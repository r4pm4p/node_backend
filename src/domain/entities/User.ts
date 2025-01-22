import Hash from "../../application/Facades/Hash";
import EntitiesInterface from "../interfaces/EntitiesInterface";
const crypto = require("crypto");

export default class User implements EntitiesInterface {
  private name: string;
  private email: string;
  private password?: string;
  private google_user: boolean;
  private email_confirmed: boolean;

  constructor(
    name: string,
    email: string,
    password: string,
    google_user: boolean = false,
    email_confirmed: boolean = false
  ) {
    this.name = name;
    this.email = email;
    this.password = this.hashPassword(password);
    this.google_user = google_user;
    this.email_confirmed = email_confirmed;
  }

  private hashPassword(plainPassword: string): string {
    try {
      return Hash.make(plainPassword);
    } catch (err) {
      throw new Error("Error hashing password");
    }
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

  public toDTO = () => {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      google_user: this.google_user,
      email_confirmed: this.email_confirmed
    };
  };
}
