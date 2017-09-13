import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './admin/users/all-users/all-users.component';
import {ModuleWithProviders} from '@angular/core';
import {DashboardComponent} from './admin/dashboard/dashboard.component';
import {SigninComponent} from './admin/auth/signin/signin.component';
import {SignoutComponent} from './admin/auth/signout/signout.component';
import {AllPostsComponent} from './admin/posts/all-posts/all-posts.component';
import {AddUserComponent} from "./admin/users/add-user/add-user.component";
import {EditUserComponent} from "./admin/users/edit-user/edit-user.component";
import {AuthGuardService} from "./auth-guard.service";
import {EditPostComponent} from "./admin/posts/edit-post/edit-post.component";
import {AddPostComponent} from "./admin/posts/add-post/add-post.component";

const APP_Routes:Routes = [
    {path: 'admin', component: SigninComponent},
    {path: 'admin/signout', component: SignoutComponent},
    {path: 'admin/dashboard', component: DashboardComponent},
    {path: 'admin/users', component: AllUsersComponent},
    {path: 'admin/add-user', component: AddUserComponent},
    {path: 'admin/edit-user', component: EditUserComponent},
    {path: 'admin/posts', component: AllPostsComponent},
    {path: 'admin/edit-post', component: EditPostComponent},
    {path: 'admin/add-post', component: AddPostComponent},
];

export const routing:ModuleWithProviders = RouterModule.forRoot(APP_Routes);