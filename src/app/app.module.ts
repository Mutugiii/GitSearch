import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { BodySearchComponent } from './body-search/body-search.component';
import { BodyUserComponent } from './body-user/body-user.component';
import { BodyRepoComponent } from './body-repo/body-repo.component';
import { BodyNavComponent } from './body-nav/body-nav.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
import { DatePipe } from './date.pipe';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    BodySearchComponent,
    BodyUserComponent,
    BodyRepoComponent,
    BodyNavComponent,
    WrongRouteComponent,
    DatePipe,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
