import {Component, OnInit} from '@angular/core';
import {Role} from "./shared/role";
import {RolesService} from "./shared/roles.services";

@Component({
    selector: 'app-roles',
    templateUrl: './roles.component.html',
    styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

    private roles: Role[] = [];

    constructor(private rolesService: RolesService) {
    }

    ngOnInit() {
        this.rolesService.getRoles().subscribe(
            roles => this.roles = roles,
            (error: Response) => console.log(error)
        );
    }

    onDelete(role) {
        if (confirm('Ar you sure you want to delete' + role.name + '?')) {

            var index = this.roles.indexOf(role);
            this.roles.splice(index, 1);

            this.rolesService.deleteRole(role.id).subscribe(null,
                error => {
                    alert('could not delete user.');
                    //revert the view back to it's original state
                    this.roles.splice(index, 0, role);
                }
            )
        }
    }
}
