import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page.component'
@NgModule({
    imports: [
         RouterModule.forChild([
            {
                path: '',
                component: MainPageComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainPageRoutesModule {}
