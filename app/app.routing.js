"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./pages/login/login.component");
var mainfragment_component_1 = require("./pages/mainfragment/mainfragment.component");
var clients_component_1 = require("./pages/clients/clients.component");
var schedule_component_1 = require("./pages/schedule/schedule.component");
var chat_component_1 = require("./pages/chat/chat.component");
exports.routes = [
    { path: "login", component: login_component_1.LoginComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlFQUErRDtBQUMvRCxzRkFBb0Y7QUFDcEYsdUVBQXFFO0FBQ3JFLDBFQUF3RTtBQUN4RSw4REFBNEQ7QUFFL0MsUUFBQSxNQUFNLEdBQUc7SUFDcEIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBRzVDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsOENBQXFCLEVBQUUsUUFBUSxFQUFFO1lBQ2xFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsb0NBQWdCLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBQztZQUN0RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBQztZQUMxRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBQztTQUVqRSxFQUFDO0NBQ0gsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsZ0NBQWM7SUFDZCw4Q0FBcUI7SUFDckIsb0NBQWdCO0lBQ2hCLHNDQUFpQjtJQUNqQiw4QkFBYTtDQUdkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbkZyYWdtZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFpbmZyYWdtZW50L21haW5mcmFnbWVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENsaWVudHNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9jbGllbnRzL2NsaWVudHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hhdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2NoYXQvY2hhdC5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcbiAgXG4gIFxuICB7IHBhdGg6ICdtYWluZnJhZ21lbnQnLCBjb21wb25lbnQ6IE1haW5GcmFnbWVudENvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICB7IHBhdGg6ICdjbGllbnQnLCBjb21wb25lbnQ6IENsaWVudHNDb21wb25lbnQsIG91dGxldDogJ2NsaWVudG91dGxldCd9LFxuICAgIHsgcGF0aDogJ3NjaGVkdWxlJywgY29tcG9uZW50OiBTY2hlZHVsZUNvbXBvbmVudCwgb3V0bGV0OiAnc2NoZWR1bGVvdXRsZXQnfSxcbiAgICAgeyBwYXRoOiAnY2hhdCcsIGNvbXBvbmVudDogQ2hhdENvbXBvbmVudCwgb3V0bGV0OiAnY2hhdG91dGxldCd9XG4gICAgXG4gIF19XG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuICBMb2dpbkNvbXBvbmVudCxcbiAgTWFpbkZyYWdtZW50Q29tcG9uZW50LFxuICBDbGllbnRzQ29tcG9uZW50LFxuICBTY2hlZHVsZUNvbXBvbmVudCxcbiAgQ2hhdENvbXBvbmVudFxuICBcbiAgXG5dOyJdfQ==