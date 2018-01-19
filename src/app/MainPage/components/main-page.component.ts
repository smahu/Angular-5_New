import { Component, AfterViewInit } from '@angular/core';
import { OnInit, AfterContentInit, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'main-page',
    template: 
    `
    <h2 class="main-page">Main Page Component</h2>
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
export class MainPageComponent implements OnInit, AfterContentInit, AfterViewInit, OnChanges{
    constructor(){
        console.log("Main Page Component Created.");
    }

    ngOnChanges(){
        console.log("Main Page - On Changes.");
    }

    ngOnInit(){
        console.log("Main page - On init");
    }

    ngAfterViewInit(){
        console.log("Main page - after view init");
    }

    ngAfterContentInit(){
        console.log("Main page - after content init");
    }

}