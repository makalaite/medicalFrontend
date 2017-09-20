import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {BlogComponent} from "./blog.component";
import {NgModule} from "@angular/core";
import {AuthService} from "../admin/auth.service";
import {BlogService} from "./shared/blog.services";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        BlogComponent,
        BlogComponent,
    ],
    exports: [
        BlogComponent
    ],
    providers: [
        BlogService, AuthService
    ]
})
export class BlogModule { }