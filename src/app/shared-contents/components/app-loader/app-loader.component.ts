import { Component} from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
    <h5 style="color: white;">Please Wait....!!</h5>
    <mat-spinner></mat-spinner>
    `,
})
export class AppLoaderComponent{
}