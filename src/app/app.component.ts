
import { Component, OnChanges, OnInit, AfterContentInit, AfterViewInit} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges {
  constructor() {
    console.log("App Comp - created");
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
}
