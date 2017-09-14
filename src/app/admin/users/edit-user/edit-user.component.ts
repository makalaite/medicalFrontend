import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../shared/user';
import {UsersService} from "../shared/users.services";

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

    private user: User = new User();

    constructor(private usersService: UsersService,
                private formBuilder: FormBuilder,
                private router: Router,
                private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        let params: any = this.activateRoute.snapshot.params;
        this.usersService.getUser(params.id).subscribe(
            user => this.user = user,
            error => console.log(error)
        );
    }

    public onUpdate(evant: any) {
        this.usersService.updateUser(this.user);
        this.router.navigate(['admin/users']);
        this.usersService.updateUser(this.user).subscribe(
            user => this.router.navigate(['admin/users']),
            error => console.log(error)
        );
    }

}