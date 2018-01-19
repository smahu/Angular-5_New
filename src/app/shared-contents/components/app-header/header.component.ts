import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, AfterViewInit, AfterContentInit  {
    _userAuth;
    constructor(){
        console.log("Header created.");
    }

    ngOnInit() {
        console.log("Header - init");
    }

    ngAfterContentInit() {
        console.log("Header - after content init ");
    }

    ngAfterViewInit() {
        console.log("Header - after view init ");
    }
}