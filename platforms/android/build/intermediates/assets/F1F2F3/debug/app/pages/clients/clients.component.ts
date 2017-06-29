import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/clients/clients.html",
  styleUrls: ["pages/clients/clients-common.css", "pages/clients/clients.css"]
})
export class ClientsComponent {
  // Your TypeScript logic goes here
  
}
