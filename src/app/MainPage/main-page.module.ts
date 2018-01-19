import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/main-page.component';
import { MainPageRoutesModule } from './main-page.routing';
import { AnotherComponent } from './components/another.component';

@NgModule({
    declarations: [ MainPageComponent, AnotherComponent ],
    imports: [ MainPageRoutesModule],
    exports: [  ],
    providers: [ ]
})
export class MainPageModule {}
