
import { Component, OnChanges, OnInit, AfterContentInit, AfterViewInit} from "@angular/core";
import { MatDialogRef, MatSpinner, MatDialog } from "@angular/material";
import { Overlay } from "@angular/cdk/overlay";
import { AppLoaderService } from "./shared-contents/services/app-loader.service";
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
    routerSubscription;
  constructor(private appLoader: AppLoaderService, private router: Router ) {
    console.log("App Comp - created");
    this.routerSubscription = this.router.events.subscribe(event => {
        if (event instanceof NavigationStart) {
          this.appLoader.open();
        } else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.appLoader.close();
        }
      });
  }
  ngOnChanges(){
    console.log("App Comp - On Changes.");
}

ngOnInit(){
    console.log("App Comp - On init");
}

ngAfterViewInit(){
    console.log("App Comp - after view init");
}

ngAfterContentInit(){
    console.log("App Comp - after content init");
}
// ngAfterViewInit() {
    
//   }

  onDestroy() {
    this.routerSubscription.unsubscribe();
  }
showModal(){
    this.appLoader.open();
    this.appLoader.delete();
}
}
