
import { Component, SkipSelf } from '@angular/core';
import { UserAuthService } from '../../shared-contents/services/user-auth.service';

@Component({
    selector: 'main-page',
    template: 
    `
    <div class="myClass">
    <h2 class="main-page">Another Page Component</h2>
    <a [routerLink]="['']">Go to Main Page</a>
    <br>
    <h3>Current Count on Another Page is: {{ _userAuthService.count }}</h3>
    <button (click)="increment()">Increment Counter on Another page</button>
    </div>
    `,
    styles: [
        `.main-page:hover {
            color: red;
        }
        .main-page{
            color: blue;
        }
        .myClass{
            background-color : #fff000;
        }
        `
    ],
    providers: [UserAuthService]
})
export class AnotherComponent{
   
    _userAuthService: UserAuthService;
    constructor(@SkipSelf() private userAuthService: UserAuthService){
        this._userAuthService = userAuthService;
    }


    increment(){
        this._userAuthService.incrementCount();
    }
}