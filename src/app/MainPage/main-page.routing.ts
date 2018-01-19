import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page.component'
import { AnotherComponent } from './components/another.component';
@NgModule({
    imports: [
         RouterModule.forChild([
            {
                path: '',
                component: MainPageComponent
            },
            {
                path: 'another',
                component: AnotherComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class MainPageRoutesModule {}
