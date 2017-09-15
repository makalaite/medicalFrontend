import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable()
export class RolesService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getRoles(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicalbackend.dev/api/roles?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().roles;
                });
    }

    getRole(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicalbackend.dev/api/roles/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().role;
                });
    }

    createRole(role)
    {
        const token = this.authService.getToken();
        return this.http.post('http://medicalbackend.dev/api/roles?token=' + token,
            role,
            {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return true;
            }
        );
    }

    updateRole(role){
        const token = this.authService.getToken();
        return this.http.put('http://medicalbackend.dev/api/roles/' + role.id + '?token=' + token,
            role,
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deleteRole(id:any){
        const token = this.authService.getToken();
        return this.http.delete('http://medicalbackend.dev/api/roles/' + id + '?token=' + token);
    }
}