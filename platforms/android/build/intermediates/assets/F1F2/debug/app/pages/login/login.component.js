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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsMENBQXlDO0FBUXpDLElBQWEsY0FBYztJQUl6Qix3QkFBb0IsTUFBYyxFQUFVLFdBQXdCO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQURwRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWpCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsK0JBQU0sR0FBTjtRQUVFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO0lBRUgsQ0FBQztJQUNELDhCQUFLLEdBQUw7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLGtDQUFrQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FDcEMsQ0FBQztZQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUMsa0NBQWtDO1FBQ25DLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN2QyxDQUFDO1lBQ0MsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFFSCxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBdkRZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7UUFDeEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztLQUNyRSxDQUFDO3FDQUs0QixlQUFNLEVBQXVCLDBCQUFXO0dBSnpELGNBQWMsQ0F1RDFCO0FBdkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnZWRJbiA9IGZhbHNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIHRoaXMudXNlciA9IG5ldyBVc2VyKCk7XG4gIH1cbiAgc3VibWl0KClcbiAge1xuICAgIGlmKHRoaXMuaXNMb2dnZWRJbil7Ly8gaWYgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICAgIGNvbnNvbGUubG9nKFwiQWxyZWFkeSBsb2dnZWQgaW5cIik7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICB9XG4gICAgZWxzZXsvLyBmaXJzdCB0aW1lIGxvZ2dpbmcgaW5cbiAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3QgdGltZSBsb2dnaW4gaW5cIik7XG4gICAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9XG5cbiAgfVxuICBsb2dpbigpXG4gIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBsb2dpbiBmdW5jdGlvblwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXIgbmFtZSA6IFwiK3RoaXMudXNlci5lbWFpbCk7XG4gICAgY29uc29sZS5sb2coXCJwYXNzd29yZCA6IFwiK3RoaXMudXNlci5wYXNzd29yZCk7XG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvaG9tZVwiXSk7XG4gICBpZih0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcikpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkluc2lkZSBsb2dpblwiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYWluZnJhZ21lbnRcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgfVxuICB9XG4gIHJlZ2lzdGVyKClcbiAge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHJlZ2lzdGVyIGZ1bmN0aW9uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlciBuYW1lIDogXCIrdGhpcy51c2VyLmVtYWlsKTtcbiAgICBjb25zb2xlLmxvZyhcInBhc3N3b3JkIDogXCIrdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICAvL3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKTtcbiAgIGlmKHRoaXMudXNlclNlcnZpY2UucmVnaXN0ZXIodGhpcy51c2VyKSlcbiAgICB7XG4gICAgICBhbGVydChcImxvZ2dlZCBpbiBzdWNjZXNzZnVsbHlcIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ==