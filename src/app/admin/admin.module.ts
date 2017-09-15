
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
    ],
    exports: [
        NavBarComponent, SigninComponent
    ],
    providers: [
        AuthService, AuthGuardService
    ]
})
export class AdminModule { }