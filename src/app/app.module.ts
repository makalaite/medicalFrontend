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
import { RolesComponent } from './admin/roles/roles.component';
import {rolesRouting} from "./admin/roles/roles.routing";
import {RolesModule} from "./admin/roles/roles.module";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,
        RolesComponent,


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
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
