"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> add-items-code
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var application_settings_1 = require("application-settings");
var MainFragmentComponent = (function () {
    function MainFragmentComponent(router) {
        this.router = router;
        this.titleAndIcon2 = { title: "Schedule" };
        this.titleAndIcon3 = { title: "Chat" };
    }
    MainFragmentComponent.prototype.onIndexChanged = function (args) {
        var tabView = args.object;
        console.log("Selected index changed! New inxed: " + tabView.selectedIndex);
        switch (tabView.selectedIndex) {
            case 0:
                this.navigateToClients();
                break;
            case 1:
                this.navigateToSchedule();
                break;
            case 2:
                this.navigateToChat();
                break;
        }
    };
    MainFragmentComponent.prototype.navigateToClients = function () {
        this.router.navigate([
            '/mainfragment',
            { outlets: { clientoutlet: ['client'] } }
        ]);
    };
    MainFragmentComponent.prototype.navigateToSchedule = function () {
        this.router.navigate([
            '/mainfragment',
            { outlets: { scheduleoutlet: ['schedule'] } }
        ]);
    };
    MainFragmentComponent.prototype.navigateToChat = function () {
        this.router.navigate([
            '/mainfragment',
            { outlets: { chatoutlet: ['chat'] } }
        ]);
    };
    MainFragmentComponent.prototype.logout = function () {
        console.log("Log out tapped---");
        application_settings_1.clear(); //clear all application settings
        this.router.navigate(["/login"]);
    };
    return MainFragmentComponent;
}());
MainFragmentComponent = __decorate([
    core_1.Component({
        selector: "mainfragment",
        templateUrl: "pages/mainfragment/mainfragment.html",
        styleUrls: ["pages/mainfragment/mainfragment-common.css", "pages/mainfragment/mainfragment.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MainFragmentComponent);
exports.MainFragmentComponent = MainFragmentComponent;
// << add-items-code 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmZyYWdtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5mcmFnbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsc0NBQTBDO0FBSTFDLDBDQUF5QztBQUN6Qyw2REFVOEI7QUFPOUIsSUFBYSxxQkFBcUI7SUFJOUIsK0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDNCLGtCQUFhLEdBQVEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDM0Msa0JBQWEsR0FBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUVULENBQUM7SUFDL0IsOENBQWMsR0FBckIsVUFBc0IsSUFBSTtRQUNsQixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FDN0IsQ0FBQztZQUNPLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDekIsS0FBSyxDQUFDO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQixLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFLLENBQUM7UUFDVixDQUFDO0lBRVQsQ0FBQztJQUNELGlEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25CLGVBQWU7WUFDZixFQUFFLE9BQU8sRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7U0FDMUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGtEQUFrQixHQUFsQjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25CLGVBQWU7WUFDZixFQUFFLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7U0FDOUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELDhDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNuQixlQUFlO1lBQ2YsRUFBRSxPQUFPLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxzQ0FBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hDLDRCQUFLLEVBQUUsQ0FBQyxDQUFBLGdDQUFnQztRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdmLDRCQUFDO0FBQUQsQ0FBQyxBQS9DRCxJQStDQztBQS9DWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUUscUNBQXFDLENBQUM7S0FDbkcsQ0FBQztxQ0FLOEIsZUFBTTtHQUp6QixxQkFBcUIsQ0ErQ2pDO0FBL0NZLHNEQUFxQjtBQWdEbEMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gYWRkLWl0ZW1zLWNvZGVcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICAgIGdldEJvb2xlYW4sXG4gICAgc2V0Qm9vbGVhbixcbiAgICBnZXROdW1iZXIsXG4gICAgc2V0TnVtYmVyLFxuICAgIGdldFN0cmluZyxcbiAgICBzZXRTdHJpbmcsXG4gICAgaGFzS2V5LFxuICAgIHJlbW92ZSxcbiAgICBjbGVhclxufSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibWFpbmZyYWdtZW50XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbWFpbmZyYWdtZW50L21haW5mcmFnbWVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tYWluZnJhZ21lbnQvbWFpbmZyYWdtZW50LWNvbW1vbi5jc3NcIiwgXCJwYWdlcy9tYWluZnJhZ21lbnQvbWFpbmZyYWdtZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluRnJhZ21lbnRDb21wb25lbnQge1xuICAgIHB1YmxpYyB0aXRsZUFuZEljb24yOiBhbnkgPSB7IHRpdGxlOiBcIlNjaGVkdWxlXCIgfTtcbiAgICBwdWJsaWMgdGl0bGVBbmRJY29uMzogYW55ID0geyB0aXRsZTogXCJDaGF0XCIgfTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuICAgIHB1YmxpYyBvbkluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgICAgICBsZXQgdGFiVmlldyA9IDxUYWJWaWV3PmFyZ3Mub2JqZWN0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBpbmRleCBjaGFuZ2VkISBOZXcgaW54ZWQ6IFwiICsgdGFiVmlldy5zZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICAgIHN3aXRjaCh0YWJWaWV3LnNlbGVjdGVkSW5kZXgpIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvQ2xpZW50cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb1NjaGVkdWxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZpZ2F0ZVRvQ2hhdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuYXZpZ2F0ZVRvQ2xpZW50cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgICAgICAnL21haW5mcmFnbWVudCcsXG4gICAgICAgICAgICAgICAgICB7IG91dGxldHM6IHsgY2xpZW50b3V0bGV0OiBbJ2NsaWVudCddIH0gfVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG5hdmlnYXRlVG9TY2hlZHVsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgICAgICAnL21haW5mcmFnbWVudCcsXG4gICAgICAgICAgICAgICAgICB7IG91dGxldHM6IHsgc2NoZWR1bGVvdXRsZXQ6IFsnc2NoZWR1bGUnXSB9IH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXZpZ2F0ZVRvQ2hhdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgICAgICAnL21haW5mcmFnbWVudCcsXG4gICAgICAgICAgICAgICAgICB7IG91dGxldHM6IHsgY2hhdG91dGxldDogWydjaGF0J10gfSB9XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbG9nb3V0KCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2cgb3V0IHRhcHBlZC0tLVwiKTtcbiAgICAgICAgICAgICAgICAgY2xlYXIoKTsvL2NsZWFyIGFsbCBhcHBsaWNhdGlvbiBzZXR0aW5nc1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gICAgICAgICAgICAgIH1cbiAgICBcbiAgICBcbn1cbi8vIDw8IGFkZC1pdGVtcy1jb2RlIl19