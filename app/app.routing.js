"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var mainfragment_component_1 = require("./pages/mainfragment/mainfragment.component");
var clients_component_1 = require("./pages/clients/clients.component");
var schedule_component_1 = require("./pages/schedule/schedule.component");
var chat_component_1 = require("./pages/chat/chat.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: 'mainfragment', component: mainfragment_component_1.MainFragmentComponent, children: [
            { path: 'client', component: clients_component_1.ClientsComponent, outlet: 'clientoutlet' },
            { path: 'schedule', component: schedule_component_1.ScheduleComponent, outlet: 'scheduleoutlet' },
            { path: 'chat', component: chat_component_1.ChatComponent, outlet: 'chatoutlet' }
        ] }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    mainfragment_component_1.MainFragmentComponent,
    clients_component_1.ClientsComponent,
    schedule_component_1.ScheduleComponent,
    chat_component_1.ChatComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCxzRkFBb0Y7QUFDcEYsdUVBQXFFO0FBQ3JFLDBFQUF3RTtBQUN4RSw4REFBNEQ7QUFFL0MsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBR3ZDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUUsUUFBUSxFQUFFO1lBQ2xFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQztZQUN0RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQztZQUMxRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztTQUVqRSxFQUFDO0NBQ0gsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsZ0NBQWM7SUFDZCw4Q0FBcUI7SUFDckIsb0NBQWdCO0lBQ2hCLHNDQUFpQjtJQUNqQiw4QkFBYTtDQUdkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkZyYWdtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFpbmZyYWdtZW50L21haW5mcmFnbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENsaWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gIFxuICBcbiAgeyBwYXRoOiAnbWFpbmZyYWdtZW50JywgY29tcG9uZW50OiBNYWluRnJhZ21lbnRDb21wb25lbnQsIGNoaWxkcmVuOiBbXG4gICAgeyBwYXRoOiAnY2xpZW50JywgY29tcG9uZW50OiBDbGllbnRzQ29tcG9uZW50LCBvdXRsZXQ6ICdjbGllbnRvdXRsZXQnfSxcbiAgICB7IHBhdGg6ICdzY2hlZHVsZScsIGNvbXBvbmVudDogU2NoZWR1bGVDb21wb25lbnQsIG91dGxldDogJ3NjaGVkdWxlb3V0bGV0J30sXG4gICAgIHsgcGF0aDogJ2NoYXQnLCBjb21wb25lbnQ6IENoYXRDb21wb25lbnQsIG91dGxldDogJ2NoYXRvdXRsZXQnfVxuICAgIFxuICBdfVxuXTtcblxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcbiAgTG9naW5Db21wb25lbnQsXG4gIE1haW5GcmFnbWVudENvbXBvbmVudCxcbiAgQ2xpZW50c0NvbXBvbmVudCxcbiAgU2NoZWR1bGVDb21wb25lbnQsXG4gIENoYXRDb21wb25lbnRcbiAgXG4gIFxuXTsiXX0=