import {RouterModule, Routes} from "@angular/router";
import {UsersComponent} from "./users.component";
import {AuthGuardService} from "../auth-guard.service";
import {UserFormComponent} from "./user-form/user-form.component";


const usersRoutes: Routes = [
    {
        path: 'admin/users', component: UsersComponent,
        children: [
            {path: 'admin/users/new', component: UserFormComponent},
            {path: 'admin/users/:id', component: UserFormComponent},
        ],
        canActivate: [AuthGuardService]
    },
];

export const usersRouting = RouterModule.forChild(usersRoutes);