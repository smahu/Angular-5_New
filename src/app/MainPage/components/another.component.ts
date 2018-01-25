
import { Component } from '@angular/core';
import { AuthService } from '../../shared-contents/services/auth.service';

@Component({
    selector: 'main-page',
    template: 
    `
    <div class="myClass">
    <h2 class="main-page">Another Page Component</h2>
    <a [routerLink]="['']">Go to Main Page</a>
    <br>
    <new-page></new-page>
    <br>
    <h3>Current Count on Another Page is: {{ _authService.count }}</h3>
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
    ]
})
export class AnotherComponent{
   
    _authService: AuthService;
    constructor(private authService: AuthService){
        this._authService = authService;
    }


    increment(){
        this._authService.incrementCount();
    }
}