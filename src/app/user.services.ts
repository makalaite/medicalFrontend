import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";


@Injectable()
export class UserService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getUsers(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicalbackend.dev/api/users?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().users;
                });
    }

    createUser(first_name: string,
               last_name: string,
               email: string,
               position: string,
               role_id: number,
               password: string,)

    {
        const token = this.authService.getToken();
        return this.http.post('http://medicalbackend.dev/api/users?token=' + token,

            {
                first_name: first_name,
                last_name: last_name,
                email: email,
                position: position,
                role_id: role_id,
                password: password
            },
            {headers: new Headers({'X-Request-Width': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }

    deleteUser(id:any){
        const token = this.authService.getToken();
        return this.http.delete('http://medicalbackend.dev/api/user' + id + '?token=' + token);
    }
}
