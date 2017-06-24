"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// >> add-items-code
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbmZyYWdtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW5mcmFnbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsc0NBQTBDO0FBSTFDLDBDQUF5QztBQU96QyxJQUFhLHFCQUFxQjtJQUk5QiwrQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIM0Isa0JBQWEsR0FBUSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQztRQUMzQyxrQkFBYSxHQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBRVQsQ0FBQztJQUMvQiw4Q0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ2xCLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0UsTUFBTSxDQUFBLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUM3QixDQUFDO1lBQ08sS0FBSyxDQUFDO2dCQUNGLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUN6QixLQUFLLENBQUM7WUFDVixLQUFLLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQzFCLEtBQUssQ0FBQztZQUNWLEtBQUssQ0FBQztnQkFDRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQztRQUNWLENBQUM7SUFFVCxDQUFDO0lBQ0QsaURBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkIsZUFBZTtZQUNmLEVBQUUsT0FBTyxFQUFFLEVBQUUsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0Qsa0RBQWtCLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDbkIsZUFBZTtZQUNmLEVBQUUsT0FBTyxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRTtTQUM5QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsOENBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25CLGVBQWU7WUFDZixFQUFFLE9BQU8sRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdmLDRCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSxxQkFBcUI7SUFMakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxzQ0FBc0M7UUFDbkQsU0FBUyxFQUFFLENBQUMsNENBQTRDLEVBQUUscUNBQXFDLENBQUM7S0FDbkcsQ0FBQztxQ0FLOEIsZUFBTTtHQUp6QixxQkFBcUIsQ0EwQ2pDO0FBMUNZLHNEQUFxQjtBQTJDbEMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gYWRkLWl0ZW1zLWNvZGVcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ1aS9sYXlvdXRzL3N0YWNrLWxheW91dFwiO1xuXG5pbXBvcnQgeyBUYWJWaWV3LCBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlld0l0ZW0gfSBmcm9tIFwidWkvdGFiLXZpZXdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm1haW5mcmFnbWVudFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL21haW5mcmFnbWVudC9tYWluZnJhZ21lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvbWFpbmZyYWdtZW50L21haW5mcmFnbWVudC1jb21tb24uY3NzXCIsIFwicGFnZXMvbWFpbmZyYWdtZW50L21haW5mcmFnbWVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTWFpbkZyYWdtZW50Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgdGl0bGVBbmRJY29uMjogYW55ID0geyB0aXRsZTogXCJTY2hlZHVsZVwiIH07XG4gICAgcHVibGljIHRpdGxlQW5kSWNvbjM6IGFueSA9IHsgdGl0bGU6IFwiQ2hhdFwiIH07XG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbiAgICBwdWJsaWMgb25JbmRleENoYW5nZWQoYXJncykge1xuICAgICAgICAgICAgbGV0IHRhYlZpZXcgPSA8VGFiVmlldz5hcmdzLm9iamVjdDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgaW5kZXggY2hhbmdlZCEgTmV3IGlueGVkOiBcIiArIHRhYlZpZXcuc2VsZWN0ZWRJbmRleCk7XG4gICAgICAgICAgICBzd2l0Y2godGFiVmlldy5zZWxlY3RlZEluZGV4KSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb0NsaWVudHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9TY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2aWdhdGVUb0NoYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmF2aWdhdGVUb0NsaWVudHMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICAgICAgJy9tYWluZnJhZ21lbnQnLFxuICAgICAgICAgICAgICAgICAgeyBvdXRsZXRzOiB7IGNsaWVudG91dGxldDogWydjbGllbnQnXSB9IH1cbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBuYXZpZ2F0ZVRvU2NoZWR1bGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICAgICAgJy9tYWluZnJhZ21lbnQnLFxuICAgICAgICAgICAgICAgICAgeyBvdXRsZXRzOiB7IHNjaGVkdWxlb3V0bGV0OiBbJ3NjaGVkdWxlJ10gfSB9XG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbmF2aWdhdGVUb0NoYXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICAgICAgJy9tYWluZnJhZ21lbnQnLFxuICAgICAgICAgICAgICAgICAgeyBvdXRsZXRzOiB7IGNoYXRvdXRsZXQ6IFsnY2hhdCddIH0gfVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICB9XG4gICAgXG4gICAgXG59XG4vLyA8PCBhZGQtaXRlbXMtY29kZSJdfQ==