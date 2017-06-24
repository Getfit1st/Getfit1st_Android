import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/chat/chat.html",
  styleUrls: ["pages/chat/chat-common.css", "pages/chat/chat.css"]
})
export class ChatComponent {
  // Your TypeScript logic goes here
  
}
