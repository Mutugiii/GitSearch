import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { BodyComponent } from './body/body.component';
import { BodySearchComponent } from './body-search/body-search.component';
import { BodyUserComponent } from './body-user/body-user.component';
import { BodyRepoComponent } from './body-repo/body-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavbarComponent,
    HeaderLandingComponent,
    BodyComponent,
    BodySearchComponent,
    BodyUserComponent,
    BodyRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
