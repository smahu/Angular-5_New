import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AppLoaderComponent } from './../components/app-loader/app-loader.component';
import { } from '@angular/core/src/render3';

@Injectable()
export class AppLoaderService {
  overlayRef;
  constructor(private overlay: Overlay) { }
  
  open(arg) {
    console.log("Loading Started...!!");

    this.overlayRef =  this.createOverlay(); // 1... creating overlay and holding it's reference
    const loaderPortal = new ComponentPortal(arg);    // 3... get dynamic comp from arg.. and create a portal to render it.
    this.overlayRef.attach(loaderPortal);    // 4.. attach this portal to overlay
    // as a result.. the overlay with dim background is displayed with  
    // our dynamic component in it.
  }

  close(){ // detatch dynamic component.. i.e hide loader 
    this.overlayRef.detach();
  }

  delete(){ // detatch dynamic component.. i.e hide loader but after 3 seconds 
    setTimeout(()=>{
        this.overlayRef.detach();
        console.log("Loading Stopped after 3 seconds.");
     }, 3000);
  }

  private createOverlay() {                 // 2..
    
    //  this is to set the position of overlay..
    // horizontal.. vertical.. and local or global.. 
    // docs me brief explanation hai..
    // but suggesting.. ignore kar do.. :P
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
      
      // angular's overlay service has a create method..
      // create needs OverlayConfig object
      // So we create one..
      // this is to add custom effects to overlay..
      // ex.. hasBackdrop meaning.. pura screen dim ho jata hai.. when we see loader..
      // woh dimmed screen ka css class we mention in backDropClass
      // scrollStategy is.. can we scroll backgroud page if the loader is showing..
      // we are currently blocking the scroll on loader..
      // usnig the .block() method.

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
    // and finally these configs are returned as a single object.. overLayConfig..
    //and passed into angular's create method..
    // and the refernece of this overlay is returned to the caller method method.. i.e open method...apna wala

    return this.overlay.create(overlayConfig);
  }
 
}