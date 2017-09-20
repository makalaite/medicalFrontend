import {RouterModule, Routes} from "@angular/router";
import {BlogComponent} from "./blog.component";
import {AuthGuardService} from "../admin/auth-guard.service";

const blogRoutes: Routes = [
    {path: 'blog', component: BlogComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
    {path: 'blog/all-posts', component: BlogComponent, canActivate: [AuthGuardService]},
    {path: 'blog/post/:id', component: BlogComponent, canActivate: [AuthGuardService]},
];

export const blogRouting = RouterModule.forChild(blogRoutes);