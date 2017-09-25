import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {GlobalVariable} from '../../config/global';


@Injectable()
export class BlogService {

    private baseApiUrl = GlobalVariable.BASE_API_URL;

    constructor(private http: Http) {

    }

    getPosts(): Observable<any> {
        return this.http.get(this.baseApiUrl + 'all-posts').map(
                (response: Response) => {
                    return response.json().posts;
                });
    }
    getPost(id: any): Observable<any> {
        return this.http.get(this.baseApiUrl + 'blog/post/' + id).map(
                (response: Response) => {
                    return response.json().post;
                });
    }
}