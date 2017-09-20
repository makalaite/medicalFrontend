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


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        NavbarClientComponent,

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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
