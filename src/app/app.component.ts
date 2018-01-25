import {
  Component,
  AfterViewInit,
  OnDestroy
} from "@angular/core";
import { AppLoaderService } from "./shared-contents/services/app-loader.service";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel
} from "@angular/router";
import { AppLoaderComponent } from "./shared-contents/components/app-loader/app-loader.component";
import { CustomLoaderComponent } from "./shared-contents/components/custom-css-loader/custom-loader.component";
import { MatSpinner } from "@angular/material";
import { AuthService } from "./shared-contents/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  _routerSubscription;
  _authService: AuthService;
  constructor(private appLoader: AppLoaderService, private router: Router, private authService: AuthService) {
    this._authService = authService;
  }

  ngAfterViewInit() {
    this._routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.appLoader.open( CustomLoaderComponent);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.appLoader.close();
      }
    });
  }

  ngOnDestroy() {
    this._routerSubscription.unsubscribe();
  }
  showModal() {
    this.appLoader.open( MatSpinner);
    this.appLoader.delete();
  }
}
