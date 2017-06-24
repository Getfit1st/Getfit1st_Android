import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

import { UserService } from "./shared/user/user.service";

import firebase = require("nativescript-plugin-firebase");
import { Router } from "@angular/router";
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

/*firebase.init({
  //persist should be set to false as otherwise numbers aren't returned during livesync
  iOSEmulatorFlush: true,
  persist: false,
  storageBucket: 'gs://giftler-f48c4.appspot.com',
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
    if (data.loggedIn) {
      console.log("User info", data.user.uid);
    }
    else {
      console.log("User not logged in ");
    }
  }
}).then(
  function (instance) {
    console.log("firebase.init done");
  },
  function (error) {
    console.log("firebase.init error: " + error);
  }
  );
  */
  
  
  firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
  persist: false,
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
    if (data.loggedIn) {
      console.log("User info", data.user.uid);
    }
    else {
      console.log("User not logged in ");
    }
  }
}).then(
  (instance) => {
    console.log("firebase.init done");
  },
  (error) => {
    console.log("firebase.init error: " + error);
  }
);


export class Main{

public noBoolKey: boolean;
  constructor(private router: Router){
    
    this.noBoolKey = hasKey("noBoolKey");
    if(this.noBoolKey)
    {
      console.log("If manin------");
      this.router.navigate(["/mainfragment"]);
    }
    else
    {
      console.log("else main --------");
      this.router.navigate(["/login"]);
    }
 
  
  }
  

}


platformNativeScriptDynamic().bootstrapModule(AppModule);
