
import { Component, SkipSelf } from '@angular/core';
import { UserAuthService } from '../../shared-contents/services/user-auth.service';
import { AuthService } from '../../shared-contents/services/auth.service';

@Component({
    selector: 'new-page',
    template: 
    `
    <h2 class="main-page">New Page Component</h2>
    <h3>Current Count on New Page is: {{ _authService.count }}</h3>
    <button (click)="increment()">Increment Counter on New page</button>

    `
})
export class NewComponent{
   
    _authService: AuthService;
    constructor(private authService: AuthService){
        this._authService = authService;
    }


    increment(){
        this._authService.incrementCount();
    }
}