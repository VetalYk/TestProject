import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { FormCreationComponent } from './form-creation/form-creation.component';
import { HomeComponent } from './home/home.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MoviesComponent } from './movies/movies.component';
import { NavbarComponent } from './navbar/navbar.component';


import {  RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent  },
    { path: 'movies', component: MoviesComponent  }
];


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    FormCreationComponent,
    HomeComponent,
    LeftSidebarComponent,
    MoviesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
