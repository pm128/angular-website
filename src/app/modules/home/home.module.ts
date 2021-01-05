import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CountingDirective } from './shared/directives/counting/counting.directive';
import { MatModule } from '../../shared/modules/mat.module';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    HomePageComponent,
    CountingDirective   
  ],
  imports: [
  MatModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
