import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {routing} from './app.routing';
import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AdminModule} from "./admin/admin.module";
import {adminRouting} from "./admin/admin.routing";
import {UsersModule} from "./admin/users/users.module";
import {postsRouting} from "./admin/posts/posts.routing";
import {PostsModule} from "./admin/posts/posts.module";
import {usersRouting} from "./admin/users/users.routing";
import {rolesRouting} from "./admin/roles/roles.routing";
import {RolesModule} from "./admin/roles/roles.module";
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect";
import {BlogModule} from "./blog/blog.module";
import {blogRouting} from "./blog/blog.routing";
import { NavbarClientComponent } from './navbar-client/navbar-client.component';
import { AboutComponent } from './about/about.component';
import {BlogPostComponent} from "./blog/blog-post/blog-post.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        NavbarClientComponent,
        AboutComponent,
        BlogPostComponent

    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AdminModule,
        adminRouting,
        UsersModule,
        usersRouting,
        PostsModule,
        postsRouting,
        rolesRouting,
        RolesModule,
        MultiselectDropdownModule,
        BlogModule,
        blogRouting,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
