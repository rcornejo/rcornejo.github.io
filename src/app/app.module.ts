import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AboutComponent } from './about/about.component';
import { ResearchGroupComponent } from './research-group/research-group.component';
import { PublicationsComponent } from './publications/publications.component';
import { TeachingComponent } from './teaching/teaching.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    AboutComponent,
    ResearchGroupComponent,
    PublicationsComponent,
    TeachingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
