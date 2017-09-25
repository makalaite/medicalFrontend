
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {SigninComponent} from "./auth/signin/signin.component";
import { BlogComponent } from '../blog/blog.component';
import { BlogPostComponent } from '../blog/blog-post/blog-post.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { CalendarComponent } from './schedule/calendar/calendar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        NavBarComponent,
        SigninComponent,
        DashboardComponent,
        ScheduleComponent,
        CalendarComponent,
    ],
    exports: [
        NavBarComponent, SigninComponent
    ],
    providers: [
        AuthService, AuthGuardService
    ]
})
export class AdminModule { }