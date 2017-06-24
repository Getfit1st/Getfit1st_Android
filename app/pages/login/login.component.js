"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var application_settings_1 = require("application-settings");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.login = function () {
        console.log("inside login function");
        console.log("user name : " + this.user.email);
        console.log("password : " + this.user.password);
        if (this.userService.login(this.user)) {
            console.log("Inside login");
            application_settings_1.setBoolean("noBoolKey", true);
            this.noBoolKey = application_settings_1.hasKey("noBoolKey");
            //console.log("Bool Key---"this.noBoolKey);
            this.router.navigate(["/mainfragment"]);
        }
        else {
            alert("Unfortunately we could not find your account.");
        }
    };
    LoginComponent.prototype.register = function () {
        console.log("inside register function");
        console.log("user name : " + this.user.email);
        console.log("password : " + this.user.password);
        //this.router.navigate(["/home"]);
        if (this.userService.register(this.user)) {
            alert("logged in successfully");
            this.router.navigate(["/login"]);
        }
        else {
            alert("Unfortunately we could not find your account.");
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        templateUrl: "pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBRXpDLDZEQVU4QjtBQVU5QixJQUFhLGNBQWM7SUFRekIsd0JBQW9CLE1BQWMsRUFBVSxXQUF3QjtRQUFoRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDckMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUIsaUNBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLDJDQUEyQztZQUUzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBRUUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QyxrQ0FBa0M7UUFDbkMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQ3ZDLENBQUM7WUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0MsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUVILENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUFoRFksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO0tBQ3JFLENBQUM7cUNBVTRCLGVBQU0sRUFBdUIsMEJBQVc7R0FSekQsY0FBYyxDQWdEMUI7QUFoRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCBwYWdlID0gcmVxdWlyZShcInVpL3BhZ2VcIik7XG5pbXBvcnQge1xuICAgIGdldEJvb2xlYW4sXG4gICAgc2V0Qm9vbGVhbixcbiAgICBnZXROdW1iZXIsXG4gICAgc2V0TnVtYmVyLFxuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmcsXG4gICAgaGFzS2V5LFxuICAgIHJlbW92ZSxcbiAgICBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIFxuICB1c2VyOiBVc2VyO1xuICAvL2lzTG9nZ2VkSW4gPSBmYWxzZTtcbiBwdWJsaWMgbm9Cb29sS2V5OiBib29sZWFuO1xuIFxuICBcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuICBcbiAgbG9naW4oKVxuICB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgbG9naW4gZnVuY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyIG5hbWUgOiBcIit0aGlzLnVzZXIuZW1haWwpO1xuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgOiBcIit0aGlzLnVzZXIucGFzc3dvcmQpO1xuICAgIGlmKHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW5zaWRlIGxvZ2luXCIpO1xuICAgICAgICBzZXRCb29sZWFuKFwibm9Cb29sS2V5XCIsIHRydWUpO1xuICAgICAgICB0aGlzLm5vQm9vbEtleSA9IGhhc0tleShcIm5vQm9vbEtleVwiKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJvb2wgS2V5LS0tXCJ0aGlzLm5vQm9vbEtleSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFpbmZyYWdtZW50XCJdKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgIH1cbiAgfVxuICByZWdpc3RlcigpXG4gIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSByZWdpc3RlciBmdW5jdGlvblwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICBpZih0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikpXG4gICAge1xuICAgICAgYWxlcnQoXCJsb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgIH1cblxuICB9XG59XG4iXX0=