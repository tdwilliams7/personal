import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { BloglinksComponent } from './bloglinks/bloglinks.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LinksComponent,
    BloglinksComponent,
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
