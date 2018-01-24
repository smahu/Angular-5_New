import { UserAuthService } from './../../shared-contents/services/user-auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'main-page',
    template: 
    `
    <h2 class="main-page">Main Page Component</h2>
    <a [routerLink]="['another']">Go to Another Page</a>
    <br>
    <h3>Current Count is: {{ _userAuthService.count }}</h3>
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

    _userAuthService: UserAuthService;
    constructor(private userAuthService: UserAuthService){
        this._userAuthService = userAuthService;
    }

    increment(){
        this._userAuthService.incrementCount();
    }


}