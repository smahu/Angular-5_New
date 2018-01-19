import { OnInit, AfterViewInit, AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit, AfterContentInit  {
    constructor(){
        console.log("Footer created.");
    }

    ngOnInit() {
        console.log("Footer - init");
    }

    ngAfterContentInit() {
        console.log("Footer - after content init ");
    }

    ngAfterViewInit() {
        console.log("Footer - after view init ");
    }
}
