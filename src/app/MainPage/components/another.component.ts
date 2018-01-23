import { Component } from '@angular/core';

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
export class AnotherComponent{
}