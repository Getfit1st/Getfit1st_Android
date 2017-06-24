import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import firebase = require("nativescript-plugin-firebase");

import { User } from "./user";

@Injectable()
export class UserService {
    constructor(private http: Http) {}

  /*register(user: User) {
    alert("About to register: " + user.email);
  }*/

  login(user: User) {
    return firebase.login({
    type: firebase.LoginType.PASSWORD,
    email: user.email,
    password: user.password
  }).then(
      function (result) {
        JSON.stringify(result);
        console.log("Loginsuccess");
        return true;
      },
      function (errorMessage) {
        console.log(errorMessage);
        return false;
      }
  );
}
register(user: User){
  return firebase.createUser({
        email: user.email,
        password: user.password
      }).then(
          function (response) {
            console.log(response);
            return response;
          }
      );
}
}