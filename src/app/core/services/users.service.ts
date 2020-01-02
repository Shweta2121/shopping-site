import { Injectable } from "@angular/core";
import { DataService } from "../classes/data-service";
import { IUserModel } from "../interfaces/common-model";

@Injectable({
  providedIn: "root"
})
export class UsersService extends DataService<IUserModel> {
  private usersDataDump: IUserModel[] = [
    {
      id: Date.now(),
      name: "Admin Test",
      email: "test@test.com",
      password: "123456",
      createdAt: new Date(),
      modifiedAt: new Date(),
      isActive: true
    }
  ];

  constructor() {
    super();
    for (const user of this.usersDataDump) {
      this.add(user);
    }
  }
}
