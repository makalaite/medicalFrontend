import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../user.services";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    constructor(
        private userService: UserService,
                private router: Router) {}

    ngOnInit() {
    }


    onCreate(form: NgForm) {
        this.userService.createUser(
            form.value.first_name,
            form.value.last_name,
            form.value.email,
            form.value.position,
            form.value.role_id,
            form.value.password,
        ).subscribe(
            response => this.router.navigate(['admin/users']),
            error => console.log(error)
        );
    }
}