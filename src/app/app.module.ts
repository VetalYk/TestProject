import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { MoviesComponent } from './movies/movies.component';


import {  RouterModule, Routes} from '@angular/router';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'articles', component: ArticlesComponent  },
    { path: 'movies', component: MoviesComponent  }
];


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        ArticlesComponent,
        MoviesComponent,
        LeftSidebarComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
  ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
