"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var firebase = require("nativescript-plugin-firebase");
var application_settings_1 = require("application-settings");
/*firebase.init({
  //persist should be set to false as otherwise numbers aren't returned during livesync
  iOSEmulatorFlush: true,
  persist: false,
  storageBucket: 'gs://giftler-f48c4.appspot.com',
  onAuthStateChanged: (data: any) => {
    console.log(JSON.stringify(data))
    if (data.loggedIn) {
      console.log("User info", data.user.uid);
    }
    else {
      console.log("User not logged in ");
    }
  }
}).then(
  function (instance) {
    console.log("firebase.init done");
  },
  function (error) {
    console.log("firebase.init error: " + error);
  }
  );
  */
firebase.init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
    persist: false,
    onAuthStateChanged: function (data) {
        console.log(JSON.stringify(data));
        if (data.loggedIn) {
            console.log("User info", data.user.uid);
        }
        else {
            console.log("User not logged in ");
        }
    }
}).then(function (instance) {
    console.log("firebase.init done");
}, function (error) {
    console.log("firebase.init error: " + error);
});
var Main = (function () {
    function Main(router) {
        this.router = router;
        this.noBoolKey = application_settings_1.hasKey("noBoolKey");
        if (this.noBoolKey) {
            console.log("If manin------");
            this.router.navigate(["/mainfragment"]);
        }
        else {
            console.log("else main --------");
            this.router.navigate(["/login"]);
        }
    }
    return Main;
}());
exports.Main = Main;
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFDNUUsMkNBQXlDO0FBSXpDLHVEQUEwRDtBQUUxRCw2REFVOEI7QUFFOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFzQkk7QUFHRixRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2Qsa0ZBQWtGO0lBQ2xGLDZCQUE2QjtJQUM3QixPQUFPLEVBQUUsS0FBSztJQUNkLGtCQUFrQixFQUFFLFVBQUMsSUFBUztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyQyxDQUFDO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQyxJQUFJLENBQ0wsVUFBQyxRQUFRO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsRUFDRCxVQUFDLEtBQUs7SUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FDRixDQUFDO0FBR0Y7SUFHRSxjQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUVoQyxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUNsQixDQUFDO1lBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFHSCxDQUFDO0lBR0gsV0FBQztBQUFELENBQUMsQUFyQkQsSUFxQkM7QUFyQlksb0JBQUk7QUF3QmpCLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC91c2VyL3VzZXIuc2VydmljZVwiO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7XG4gICAgZ2V0Qm9vbGVhbixcbiAgICBzZXRCb29sZWFuLFxuICAgIGdldE51bWJlcixcbiAgICBzZXROdW1iZXIsXG4gICAgZ2V0U3RyaW5nLFxuICAgIHNldFN0cmluZyxcbiAgICBoYXNLZXksXG4gICAgcmVtb3ZlLFxuICAgIGNsZWFyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG4vKmZpcmViYXNlLmluaXQoe1xuICAvL3BlcnNpc3Qgc2hvdWxkIGJlIHNldCB0byBmYWxzZSBhcyBvdGhlcndpc2UgbnVtYmVycyBhcmVuJ3QgcmV0dXJuZWQgZHVyaW5nIGxpdmVzeW5jXG4gIGlPU0VtdWxhdG9yRmx1c2g6IHRydWUsXG4gIHBlcnNpc3Q6IGZhbHNlLFxuICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9naWZ0bGVyLWY0OGM0LmFwcHNwb3QuY29tJyxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpbmZvXCIsIGRhdGEudXNlci51aWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBub3QgbG9nZ2VkIGluIFwiKTtcbiAgICB9XG4gIH1cbn0pLnRoZW4oXG4gIGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICB9LFxuICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICB9XG4gICk7XG4gICovXG4gIFxuICBcbiAgZmlyZWJhc2UuaW5pdCh7XG4gIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgLy8gc2VlIHRoZWlyIHJlc3BlY3RpdmUgZG9jcy5cbiAgcGVyc2lzdDogZmFsc2UsXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgaW5mb1wiLCBkYXRhLnVzZXIudWlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlVzZXIgbm90IGxvZ2dlZCBpbiBcIik7XG4gICAgfVxuICB9XG59KS50aGVuKFxuICAoaW5zdGFuY2UpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgfSxcbiAgKGVycm9yKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgfVxuKTtcblxuXG5leHBvcnQgY2xhc3MgTWFpbntcblxucHVibGljIG5vQm9vbEtleTogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7XG4gICAgXG4gICAgdGhpcy5ub0Jvb2xLZXkgPSBoYXNLZXkoXCJub0Jvb2xLZXlcIik7XG4gICAgaWYodGhpcy5ub0Jvb2xLZXkpXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCJJZiBtYW5pbi0tLS0tLVwiKTtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYWluZnJhZ21lbnRcIl0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgY29uc29sZS5sb2coXCJlbHNlIG1haW4gLS0tLS0tLS1cIik7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbiBcbiAgXG4gIH1cbiAgXG5cbn1cblxuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdfQ==