"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../shared/user/user.service");
var calendar_1 = require("nativescript-telerik-ui-pro/calendar");
var ScheduleComponent = (function () {
    function ScheduleComponent() {
        this.selectedIndex = 1;
        this.items = [];
        this.items.push("Week");
        this.items.push("Month");
        //this.items.push("Month Names");
        this.items.push("Year");
    }
    Object.defineProperty(ScheduleComponent.prototype, "viewMode", {
        get: function () {
            return this._viewMode;
        },
        enumerable: true,
        configurable: true
    });
    ScheduleComponent.prototype.onchange = function (args) {
        console.log("Drop Down selected index changed from " + args.oldIndex + " to " + args.newIndex);
        if (args.newIndex == 0) {
            console.log("Week tapped");
            this._viewMode = calendar_1.CalendarViewMode.Week;
        }
        else if (args.newIndex == 1) {
            console.log("Month Tapped");
            this._viewMode = calendar_1.CalendarViewMode.Month;
        }
        else {
            console.log("Year Tapped");
            this._viewMode = calendar_1.CalendarViewMode.Year;
        }
    };
    ScheduleComponent.prototype.onopen = function () {
        console.log("Drop Down opened.");
    };
    ScheduleComponent.prototype.onclose = function () {
        console.log("Drop Down closed.");
    };
    ScheduleComponent.prototype.create = function () {
        alert("Create event..");
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/schedule/schedule.html",
        styleUrls: ["pages/schedule/schedule-common.css", "pages/schedule/schedule.css"]
    }),
    __metadata("design:paramtypes", [])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZWR1bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBRTFDLCtEQUE2RDtBQUc3RCxpRUFBcUY7QUFVckYsSUFBYSxpQkFBaUI7SUFNMUI7UUFKTyxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQU1yQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELHNCQUFJLHVDQUFRO2FBQVo7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVNLG9DQUFRLEdBQWYsVUFBZ0IsSUFBbUM7UUFFL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBeUMsSUFBSSxDQUFDLFFBQVEsWUFBTyxJQUFJLENBQUMsUUFBVSxDQUFDLENBQUM7UUFDMUYsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBRSxDQUFDLENBQUMsQ0FDcEIsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRywyQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDM0MsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFFLENBQUMsQ0FBQyxDQUN6QixDQUFDO1lBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLDJCQUFnQixDQUFDLEtBQUssQ0FBQztRQUM1QyxDQUFDO1FBT0QsSUFBSSxDQUFBLENBQUM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsMkJBQWdCLENBQUMsSUFBSSxDQUFDO1FBRTNDLENBQUM7SUFDTCxDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sbUNBQU8sR0FBZDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0Qsa0NBQU0sR0FBTjtRQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFPTCx3QkFBQztBQUFELENBQUMsQUE1REQsSUE0REM7QUE1RFksaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsb0NBQW9DLEVBQUUsNkJBQTZCLENBQUM7S0FDakYsQ0FBQzs7R0FDVyxpQkFBaUIsQ0E0RDdCO0FBNURZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWRyb3AtZG93blwiO1xuaW1wb3J0IHsgUmFkQ2FsZW5kYXIsIENhbGVuZGFyVmlld01vZGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWktcHJvL2NhbGVuZGFyXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvc2NoZWR1bGUvc2NoZWR1bGUuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3NjaGVkdWxlL3NjaGVkdWxlLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9zY2hlZHVsZS9zY2hlZHVsZS5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQge1xuICBcbiAgICBwdWJsaWMgc2VsZWN0ZWRJbmRleCA9IDE7XG4gICAgcHVibGljIGl0ZW1zOiBBcnJheTxzdHJpbmc+OyAgLy9kcm9wZG93biBsaXN0IGl0ZW1zXG4gICAgIHByaXZhdGUgX3ZpZXdNb2RlOyAgLy9jYWxhbmRlciB2aWV3IG1vZGVzXG4gXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKFwiV2Vla1wiKTtcbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKFwiTW9udGhcIik7XG4gICAgICAgIC8vdGhpcy5pdGVtcy5wdXNoKFwiTW9udGggTmFtZXNcIik7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChcIlllYXJcIik7IFxuICAgIH1cbiAgICBnZXQgdmlld01vZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3TW9kZTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG9uY2hhbmdlKGFyZ3M6IFNlbGVjdGVkSW5kZXhDaGFuZ2VkRXZlbnREYXRhKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coYERyb3AgRG93biBzZWxlY3RlZCBpbmRleCBjaGFuZ2VkIGZyb20gJHthcmdzLm9sZEluZGV4fSB0byAke2FyZ3MubmV3SW5kZXh9YCk7XG4gICAgICAgIGlmKGFyZ3MubmV3SW5kZXg9PTApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2VlayB0YXBwZWRcIik7XG4gICAgICAgICAgICB0aGlzLl92aWV3TW9kZSA9IENhbGVuZGFyVmlld01vZGUuV2VlaztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGFyZ3MubmV3SW5kZXg9PTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9udGggVGFwcGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fdmlld01vZGUgPSBDYWxlbmRhclZpZXdNb2RlLk1vbnRoO1xuICAgICAgICB9XG4gICAgICAgIC8qZWxzZSBpZihhcmdzLm5ld0luZGV4PT0yKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1vbnRoIG5hbWVzIFRhcHBlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdNb2RlID0gQ2FsZW5kYXJWaWV3TW9kZS5Nb250aE5hbWVzO1xuICAgICAgICBcbiAgICAgICAgfSovXG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlllYXIgVGFwcGVkXCIpO1xuICAgICAgICAgICAgdGhpcy5fdmlld01vZGUgPSBDYWxlbmRhclZpZXdNb2RlLlllYXI7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuIFxuICAgIHB1YmxpYyBvbm9wZW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRHJvcCBEb3duIG9wZW5lZC5cIik7XG4gICAgfVxuIFxuICAgIHB1YmxpYyBvbmNsb3NlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkRyb3AgRG93biBjbG9zZWQuXCIpO1xuICAgIH1cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgYWxlcnQoXCJDcmVhdGUgZXZlbnQuLlwiKTtcbiAgICB9XG4gIFxuICAgXG4gICAgXG4gIFxuICAgIFxuICBcbn1cbiJdfQ==