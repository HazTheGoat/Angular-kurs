import { userDb } from "./../../../../db";
import { Injectable } from "@angular/core";
import { UserModel } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private users: UserModel[] = userDb;

  getUserById(userId) {
    return this.users.find(user => user.id === userId);
  }
}
