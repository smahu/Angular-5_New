import {Component} from '@angular/core';

@Component({
    selector: 'app-custom-loader',
    template: `<div class="top-level">
    <div class="lds-dual-ring">
      <div class="outer">
      </div>
      <div class="inner">
      </div>
    </div>
  </div>`,
  styles: [

    `@-webkit-keyframes lds-dual-ring {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes lds-dual-ring {
        0% {
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      .lds-dual-ring {
        text-align: center;
        position: relative;
        align-content: center;
        top: -70px;
        left: calc(50% - 70px);
      }
      .lds-dual-ring .outer {
        position: absolute;
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 1px solid #000;
        border-color: red transparent blue transparent;
        -webkit-animation: lds-dual-ring 0.8s linear infinite;
        animation: lds-dual-ring 0.8s linear infinite;
      }
      
      .lds-dual-ring .inner {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 20px;
        left: 20px;
        border-radius: 25%;
        border: 1px solid #000;
        border-color: yellow #cccccc green #cccccc;
        -webkit-animation: lds-dual-ring 1.5s linear infinite;
        animation: lds-dual-ring 1.5s linear infinite;
      }
      
      .top-level {
        position: fixed;;
      }`
  ]
})
export class CustomLoaderComponent {}