import { LoginComponent } from "./pages/login/login.component";
import { MainFragmentComponent } from "./pages/mainfragment/mainfragment.component";
import { ClientsComponent } from "./pages/clients/clients.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { ChatComponent } from "./pages/chat/chat.component";

export const routes = [
  { path: "login", component: LoginComponent },
  
  
  { path: 'mainfragment', component: MainFragmentComponent, children: [
    { path: 'client', component: ClientsComponent, outlet: 'clientoutlet'},
    { path: 'schedule', component: ScheduleComponent, outlet: 'scheduleoutlet'},
     { path: 'chat', component: ChatComponent, outlet: 'chatoutlet'}
    
  ]}
];

export const navigatableComponents = [
  LoginComponent,
  MainFragmentComponent,
  ClientsComponent,
  ScheduleComponent,
  ChatComponent
  
  
];