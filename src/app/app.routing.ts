import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {BlogComponent} from "./blog/blog.component";
import {AboutComponent} from "./about/about.component";


const APP_Routes:Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'blog/all-posts', component: BlogComponent},
    {path: 'about', component: AboutComponent},

];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_Routes);