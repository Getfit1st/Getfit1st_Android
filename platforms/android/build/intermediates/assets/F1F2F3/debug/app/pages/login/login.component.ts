import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import page = require("ui/page");
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "application-settings";


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})

export class LoginComponent {
  
  user: User;
  //isLoggedIn = false;
 public noBoolKey: boolean;
 
  
  
  constructor(private router: Router, private userService: UserService) {
    this.user = new User();
  }
  
  login()
  {
    console.log("inside login function");
    console.log("user name : "+this.user.email);
    console.log("password : "+this.user.password);
    if(this.userService.login(this.user))
    {
        console.log("Inside login");
        setBoolean("noBoolKey", true);
        this.noBoolKey = hasKey("noBoolKey");
        //console.log("Bool Key---"this.noBoolKey);
        
        this.router.navigate(["/mainfragment"]);
    }
    else
    {
      alert("Unfortunately we could not find your account.");
    }
  }
  register()
  {
    console.log("inside register function");
    console.log("user name : "+this.user.email);
    console.log("password : "+this.user.password);
    //this.router.navigate(["/home"]);
   if(this.userService.register(this.user))
    {
      alert("logged in successfully");
      this.router.navigate(["/login"]);
    }
    else
    {
      alert("Unfortunately we could not find your account.");
    }

  }
}
