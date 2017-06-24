"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.isLoggedIn = false;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggedIn) {
            console.log("Already logged in");
            console.log("user name : " + this.user.email);
            console.log("password : " + this.user.password);
        }
        else {
            console.log("first time loggin in");
            console.log("user name : " + this.user.email);
            console.log("password : " + this.user.password);
            this.login();
        }
    };
    LoginComponent.prototype.login = function () {
        console.log("inside login function");
        console.log("user name : " + this.user.email);
        console.log("password : " + this.user.password);
        //this.router.navigate(["/home"]);
        if (this.userService.login(this.user)) {
            console.log("Inside login");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBU3pDLElBQWEsY0FBYztJQUl6Qix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQURwRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUVFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO0lBRUgsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLGtDQUFrQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDcEMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsa0NBQWtDO1FBQ25DLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN2QyxDQUFDO1lBQ0MsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFFSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBdkRZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQUs0QixlQUFNLEVBQXVCLDBCQUFXO0dBSnpELGNBQWMsQ0F1RDFCO0FBdkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgcGFnZSA9IHJlcXVpcmUoXCJ1aS9wYWdlXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXSxcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIHVzZXI6IFVzZXI7XG4gIGlzTG9nZ2VkSW4gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG4gIHN1Ym1pdCgpXG4gIHtcbiAgICBpZih0aGlzLmlzTG9nZ2VkSW4pey8vIGlmIGFscmVhZHkgbG9nZ2VkIGluXG4gICAgICBjb25zb2xlLmxvZyhcIkFscmVhZHkgbG9nZ2VkIGluXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJ1c2VyIG5hbWUgOiBcIit0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgfVxuICAgIGVsc2V7Ly8gZmlyc3QgdGltZSBsb2dnaW5nIGluXG4gICAgICBjb25zb2xlLmxvZyhcImZpcnN0IHRpbWUgbG9nZ2luIGluXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJ1c2VyIG5hbWUgOiBcIit0aGlzLnVzZXIuZW1haWwpO1xuICAgICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgICB0aGlzLmxvZ2luKCk7XG4gICAgfVxuXG4gIH1cbiAgbG9naW4oKVxuICB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgbG9naW4gZnVuY3Rpb25cIik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VyIG5hbWUgOiBcIit0aGlzLnVzZXIuZW1haWwpO1xuICAgIGNvbnNvbGUubG9nKFwicGFzc3dvcmQgOiBcIit0aGlzLnVzZXIucGFzc3dvcmQpO1xuICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgaWYodGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnNpZGUgbG9naW5cIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFpbmZyYWdtZW50XCJdKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgIH1cbiAgfVxuICByZWdpc3RlcigpXG4gIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSByZWdpc3RlciBmdW5jdGlvblwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICBpZih0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcikpXG4gICAge1xuICAgICAgYWxlcnQoXCJsb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpO1xuICAgIH1cblxuICB9XG59XG4iXX0=