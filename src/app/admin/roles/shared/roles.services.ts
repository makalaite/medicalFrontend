import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {AuthService} from "../../auth.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {GlobalVariable} from "../../../config/global";

@Injectable()
export class RolesService {

    private baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http, private authService: AuthService) {

    }

    getRoles(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get(this.baseApiUrl + 'roles?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().roles;
                });
    }

    getRole(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get(this.baseApiUrl + 'roles/' + id + '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().role;
                });
    }

    createRole(role)
    {
        const token = this.authService.getToken();
        return this.http.post(this.baseApiUrl + 'roles?token=' + token,
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
        return this.http.put(this.baseApiUrl + 'roles/' + role.id + '?token=' + token,
            role,
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deleteRole(id:any){
        const token = this.authService.getToken();
        return this.http.delete(this.baseApiUrl + 'roles/' + id + '?token=' + token);
    }
}