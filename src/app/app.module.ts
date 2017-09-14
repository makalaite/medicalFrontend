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


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent,


    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        AdminModule,
        adminRouting
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
