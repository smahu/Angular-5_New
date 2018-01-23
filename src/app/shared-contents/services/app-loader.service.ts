import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AppLoaderComponent } from './../components/app-loader/app-loader.component';
import { } from '@angular/core/src/render3';

interface AppLoaderConfig {
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
  }

const DEFAULT_CONFIG: AppLoaderConfig = {
    hasBackdrop: true,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
  }

@Injectable()
export class AppLoaderService {
  overlayRef;
  constructor(private overlay: Overlay) { }
  
  open(config: AppLoaderConfig = {}, arg) {
    console.log("Loading Started...!!");
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };
    this.overlayRef =  this.createOverlay(dialogConfig);
    const loaderPortal = new ComponentPortal(arg);
    this.overlayRef.attach(loaderPortal);
  }

  close(){
    this.overlayRef.detach();
    console.log("Loading Stopped after Navigation Ended..");
  }
  private createOverlay(config: AppLoaderConfig) {
    
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }
  delete(){
    setTimeout(()=>{
        this.overlayRef.detach();
        console.log("Loading Stopped after 3 seconds.");
     }, 3000);
  }
  private getOverlayConfig(config: AppLoaderConfig): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}