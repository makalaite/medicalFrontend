import {Component, OnInit} from '@angular/core';
import {User} from './shared/user';
import {UsersService} from './shared/users.services';
import {Response} from '@angular/http';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    private users: User[] = [];

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.getUsers().subscribe(
            users => this.users = users,
            (error: Response) => console.log(error)
        );
    }

    onDelete(user){
        if (confirm('Ar you sure you want to delete' + user.first_name + '?')){

            var index = this.users.indexOf(user);
            this.users.splice(index, 1);

            this.usersService.deleteUser(user.id).subscribe(null,
                error => {
                    alert('could not delete user.');
                    //revert the view back to it's original state
                    this.users.splice(index, 0 , user);
                }
            )
        }
    }

}
