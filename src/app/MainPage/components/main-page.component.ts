import { UserAuthService } from './../../shared-contents/services/user-auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'main-page',
    template: 
    `
    <h2 class="main-page">Main Page Component</h2>
    <a [routerLink]="['another']">Go to Another Page</a>
    <b>{{_userAuthService.getSomeMsg()}}</b>
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


}