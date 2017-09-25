import {RouterModule, Routes} from "@angular/router";
import {AuthGuardService} from "../auth-guard.service";
import {PostFormComponent} from "./post-form/post-form.component";
import {PostsComponent} from "./posts.component";


const postsRoutes: Routes = [
    {
        path: 'admin/posts', component: PostsComponent,
        children: [
            {path: 'admin/posts/new', component: PostFormComponent},
            {path: 'admin/posts/:id', component: PostFormComponent},
        ],
        canActivate: [AuthGuardService]
    },
];

export const postsRouting = RouterModule.forChild(postsRoutes);