import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/schedule/schedule.html",
  styleUrls: ["pages/schedule/schedule-common.css", "pages/schedule/schedule.css"]
})
export class ScheduleComponent {
  // Your TypeScript logic goes here
  
}
