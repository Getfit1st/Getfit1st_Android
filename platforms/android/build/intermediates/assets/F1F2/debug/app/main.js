"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var firebase = require("nativescript-plugin-firebase");
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
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwREFBNEU7QUFDNUUsMkNBQXlDO0FBSXpDLHVEQUEwRDtBQUUxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXNCSTtBQUdGLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDZCxrRkFBa0Y7SUFDbEYsNkJBQTZCO0lBQzdCLE9BQU8sRUFBRSxLQUFLO0lBQ2Qsa0JBQWtCLEVBQUUsVUFBQyxJQUFTO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxVQUFDLFFBQVE7SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDcEMsQ0FBQyxFQUNELFVBQUMsS0FBSztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUNGLENBQUM7QUFDRixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2VcIjtcblxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbi8qZmlyZWJhc2UuaW5pdCh7XG4gIC8vcGVyc2lzdCBzaG91bGQgYmUgc2V0IHRvIGZhbHNlIGFzIG90aGVyd2lzZSBudW1iZXJzIGFyZW4ndCByZXR1cm5lZCBkdXJpbmcgbGl2ZXN5bmNcbiAgaU9TRW11bGF0b3JGbHVzaDogdHJ1ZSxcbiAgcGVyc2lzdDogZmFsc2UsXG4gIHN0b3JhZ2VCdWNrZXQ6ICdnczovL2dpZnRsZXItZjQ4YzQuYXBwc3BvdC5jb20nLFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQ6IChkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICBpZiAoZGF0YS5sb2dnZWRJbikge1xuICAgICAgY29uc29sZS5sb2coXCJVc2VyIGluZm9cIiwgZGF0YS51c2VyLnVpZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJVc2VyIG5vdCBsb2dnZWQgaW4gXCIpO1xuICAgIH1cbiAgfVxufSkudGhlbihcbiAgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gIH0sXG4gIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gIH1cbiAgKTtcbiAgKi9cbiAgXG4gIFxuICBmaXJlYmFzZS5pbml0KHtcbiAgLy8gT3B0aW9uYWxseSBwYXNzIGluIHByb3BlcnRpZXMgZm9yIGRhdGFiYXNlLCBhdXRoZW50aWNhdGlvbiBhbmQgY2xvdWQgbWVzc2FnaW5nLFxuICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICBwZXJzaXN0OiBmYWxzZSxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkOiAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgaWYgKGRhdGEubG9nZ2VkSW4pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBpbmZvXCIsIGRhdGEudXNlci51aWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBub3QgbG9nZ2VkIGluIFwiKTtcbiAgICB9XG4gIH1cbn0pLnRoZW4oXG4gIChpbnN0YW5jZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpO1xuICB9XG4pO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=