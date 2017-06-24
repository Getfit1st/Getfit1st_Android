// >> add-items-code
import { Component } from "@angular/core";
import { StackLayout } from "ui/layouts/stack-layout";

import { TabView, SelectedIndexChangedEventData, TabViewItem } from "ui/tab-view";
import { Router } from '@angular/router';
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
    selector: "mainfragment",
    templateUrl: "pages/mainfragment/mainfragment.html",
    styleUrls: ["pages/mainfragment/mainfragment-common.css", "pages/mainfragment/mainfragment.css"]
})
export class MainFragmentComponent {
    public titleAndIcon2: any = { title: "Schedule" };
    public titleAndIcon3: any = { title: "Chat" };
    
    constructor(private router: Router) {}
    public onIndexChanged(args) {
            let tabView = <TabView>args.object;
            console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
            switch(tabView.selectedIndex) 
            {
                    case 0: 
                        this.navigateToClients();
                        break;
                    case 1:
                        this.navigateToSchedule();
                        break;
                    case 2:
                        this.navigateToChat();
                        break;
                    }
           
            }
            navigateToClients() {
                this.router.navigate([
                  '/mainfragment',
                  { outlets: { clientoutlet: ['client'] } }
                ]);
              }
              navigateToSchedule() {
                this.router.navigate([
                  '/mainfragment',
                  { outlets: { scheduleoutlet: ['schedule'] } }
                ]);
              }
              navigateToChat() {
                this.router.navigate([
                  '/mainfragment',
                  { outlets: { chatoutlet: ['chat'] } }
                ]);
              }
              logout(){
                console.log("Log out tapped---");
                 clear();//clear all application settings
                this.router.navigate(["/login"]);
              }
    
    
}
// << add-items-code