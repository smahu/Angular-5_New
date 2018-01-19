import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainPageComponent } from "./MainPage/components/main-page.component";

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
    //loadChildren: "./MainPage/main-page.module#MainPageModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
