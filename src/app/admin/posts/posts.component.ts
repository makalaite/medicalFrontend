import {Component, OnInit} from '@angular/core';
import {Post} from './shared/post';
import {PostsService} from './shared/posts.services';
import {Response} from '@angular/http';
import {fadeInAnimation} from '../../animations/fade-in.animation';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
    animations: [fadeInAnimation],
    host: {'[@fadeInAnimation]': ''},
})
export class PostsComponent implements OnInit {

    private posts: Post[] = [];

    constructor(private postsService: PostsService) {

    }

    ngOnInit() {
        this.postsService.getPosts().subscribe(
            posts => this.posts = posts,
            (error: Response) => console.log(error)
        );
    }

    onDelete(post){
        if(confirm('Ar you sure you want to delete' + post.title + '?'))
        {
            var index = this.posts.indexOf(post);
            this.posts.splice(index, 1);

            this.postsService.deletePost(post.id).subscribe(null,
                error => {
                    alert('could not delete post.');
                    this.posts.splice(index, 0 , post);
                }
            )
        }
    }

}
