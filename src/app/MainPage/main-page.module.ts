import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/main-page.component';
import { MainPageRoutesModule } from './main-page.routing';

@NgModule({
    declarations: [ MainPageComponent ],
    imports: [ MainPageRoutesModule ],
    exports: [ MainPageComponent ],
    providers: [ ]
})
export class MainPageModule {}
