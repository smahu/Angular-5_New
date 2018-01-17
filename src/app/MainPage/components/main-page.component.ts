import { Component } from '@angular/core';

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
export class MainPageComponent{

}