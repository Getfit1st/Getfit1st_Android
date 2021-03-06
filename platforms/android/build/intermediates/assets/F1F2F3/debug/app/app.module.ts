import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptUICalendarModule } from "nativescript-telerik-ui-pro/calendar/angular";
import { DropDownModule } from "nativescript-drop-down/angular";
//import { FAB } from "nativescript-floatingactionbutton";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponents
    ],

  bootstrap: [AppComponent],

  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptUICalendarModule,
    DropDownModule,
  //  FAB,
    NativeScriptRouterModule.forRoot(routes)],
    
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
