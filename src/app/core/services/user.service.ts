import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IUserModel } from "../interfaces/common-model";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<IUserModel[]>(`/users`);
  }

  getById(id: number) {
    return this.http.get(`/users/` + id);
  }

  register(user: IUserModel) {
    return this.http.post(`/users/register`, user);
  }
}
