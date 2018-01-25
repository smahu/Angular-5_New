
import { Component } from '@angular/core';
import { AuthService } from '../../shared-contents/services/auth.service';

@Component({
    selector: 'main-page',
    template: 
    `
    <h2 class="main-page">Main Page Component</h2>
    <a [routerLink]="['another']">Go to Another Page</a>
    <br>
    <h3>Current Count is: {{ _authService.count }}</h3>
    <button (click)="increment()">Increment Counter on main page</button>
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

    _authService: AuthService;
    constructor(private authService: AuthService){
        this._authService = authService;
    }


    increment(){
        this._authService.incrementCount();
    }
}


}