import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {AuthService} from "./admin/auth.service";
import {Post} from "./post.interface";


@Injectable()
export class PostService {
    constructor(private http: Http, private authService: AuthService) {

    }

    getPosts(): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicalbackend.dev/api/posts?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().posts;
                });
    }
    getPost(id: any): Observable<any> {
        const token = this.authService.getToken();
        return this.http.get('http://medicalbackend.dev/api/posts/' + id+ '?token=' + token)
            .map(
                (response: Response) => {
                    return response.json().post;
                });
    }

    createPost(title: string,
               text: string) {
        const token = this.authService.getToken();
        return this.http.post('http://medicalbackend.dev/api/posts?token=' + token,
            {
                title: title,
                text: text
            },
            {headers: new Headers({'X-Request-Width': 'XMLHttpRequest'})}
        ).map(
            (response: Response) => {
                return response.json().post;
            }
        )
    }

    updatePost(post: Post){
        const token = this.authService.getToken();
        return this.http.put('http://medicalbackend.dev/api/posts' + post.id + '?token=' + token,
            JSON.stringify(post),
            {headers: new Headers({'Content-type': 'application/json'})}
        ).map(
            (response: Response) => response.json()
        );
    }

    deletePost(id:any){
        const token = this.authService.getToken();
        return this.http.delete('http://medicalbackend.dev/api/posts/' + id + '?token=' + token);
    }
}