import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { RadCalendar, CalendarViewMode } from "nativescript-telerik-ui-pro/calendar";



@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/schedule/schedule.html",
  styleUrls: ["pages/schedule/schedule-common.css", "pages/schedule/schedule.css"]
})
export class ScheduleComponent {
  
    public selectedIndex = 1;
    public items: Array<string>;  //dropdown list items
     private _viewMode;  //calander view modes
 
    constructor() {
    
        this.items = [];
        this.items.push("Week");
        this.items.push("Month");
        //this.items.push("Month Names");
        this.items.push("Year"); 
    }
    get viewMode() {
        return this._viewMode;
    }
    
    public onchange(args: SelectedIndexChangedEventData)
    {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
        if(args.newIndex==0)
        {
            console.log("Week tapped");
            this._viewMode = CalendarViewMode.Week;
        }
        else if(args.newIndex==1)
        {
            console.log("Month Tapped");
            this._viewMode = CalendarViewMode.Month;
        }
        /*else if(args.newIndex==2)
        {
            console.log("Month names Tapped");
            this._viewMode = CalendarViewMode.MonthNames;
        
        }*/
        else{
            console.log("Year Tapped");
            this._viewMode = CalendarViewMode.Year;
        
        }
    }
 
    public onopen() {
        console.log("Drop Down opened.");
    }
 
    public onclose() {
        console.log("Drop Down closed.");
    }
    create(){
        alert("Create event..");
    }
  
   
    
  
    
  
}
