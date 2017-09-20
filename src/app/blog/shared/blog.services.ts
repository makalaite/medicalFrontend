import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';


@Injectable()
export class BlogService {
    constructor(private http: Http) {

    }

    getPosts(): Observable<any> {
        return this.http.get('http://medicalbackend.dev/api/blog/all-posts').map(
                (response: Response) => {
                    return response.json().posts;
                });
    }
    getPost(id: any): Observable<any> {
        return this.http.get('http://medicalbackend.dev/api/blog/post/' + id).map(
                (response: Response) => {
                    return response.json().post;
                });
    }
}