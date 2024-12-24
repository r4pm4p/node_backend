import { Hash } from "../../application/Facades/Hash";
import { EntitiesInterface } from "../../application/interfaces/EntitiesInterface";
const crypto = require("crypto")

export class User implements EntitiesInterface {
  private id: string;
  private name: string;
  private email: string;
  private password?: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = this.hashPassword(password)
  }

  private hashPassword(plainPassword: string): string {
    try {
      return Hash.make(plainPassword);
    } catch (err) {
      throw new Error('Error hashing password');
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
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password
    }
  }

}
