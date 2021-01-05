import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
// import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './modules/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { HomePageComponent } from './modules/home/components/home-page/home-page.component';
import { FooterComponent } from './modules/footer/footer.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';

import { MatModule } from './shared/modules/mat.module';

import { HomeModule } from './modules/home/home.module';


const routes: Routes = [
   { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    HeaderComponent,
    // HomePageComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    MatModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
