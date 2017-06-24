"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var ScheduleComponent = (function () {
    function ScheduleComponent() {
    }
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/schedule/schedule.html",
        styleUrls: ["pages/schedule/schedule-common.css", "pages/schedule/schedule.css"]
    })
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLCtEQUE2RDtBQVM3RCxJQUFhLGlCQUFpQjtJQUE5QjtJQUdBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsb0NBQW9DLEVBQUUsNkJBQTZCLENBQUM7S0FDakYsQ0FBQztHQUNXLGlCQUFpQixDQUc3QjtBQUhZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIFxufVxuIl19