import { Component, AfterViewInit } from '@angular/core';
import { OnInit, AfterContentInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'main-page',
    template: 
    `
    <h2 class="main-page">Another Page Component</h2>
    <a [routerLink]="['']">Go to Main Page</a><br>
    `,
    styles: [
        `.main-page:hover {
            color: red;
        }
        .main-page{
            color: blue;
        }
        
        `
    ]
})
export class AnotherComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges{
    someInput: any;
    constructor(){
        console.log("Another Page Component Created.");
    }

    ngOnChanges(){
        console.log("Another Page - On Changes.");
    }

    ngOnInit(){
        console.log("Another page - On init");
    }

    ngAfterViewInit(){
        console.log("Another page - after view init");
    }

    ngAfterContentInit(){
        console.log("Another page - after content init");
    }

}