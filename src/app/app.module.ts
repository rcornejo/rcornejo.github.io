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
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    AboutComponent,
    ResearchGroupComponent,
    PublicationsComponent,
    TeachingComponent,
    FooterComponent,    
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
