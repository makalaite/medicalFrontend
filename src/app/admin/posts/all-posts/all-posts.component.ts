import {Component, OnInit} from '@angular/core';
import {Post} from '../../../post.interface';
import {PostService} from '../../../post.services';
import {Response} from '@angular/http';

@Component({
    selector: 'app-all-posts',
    templateUrl: './all-posts.component.html',
    styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

    posts: Post[];

    constructor(private postService: PostService) {

    }

    ngOnInit() {
        this.postService.getPosts().subscribe(
            (posts: Post[]) => this.posts = posts,
            (error: Response) => console.log(error)
        );
    }

    onDelete(post: any){
        const result = confirm('Ar you sure?');
        if(result){
            this.postService.deletePost(post.id);
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);

            this.postService.deletePost(post.id).subscribe(null,
                error => {
                    alert('could not delete post.');
                    this.posts.splice(index, 0 , post);
                }
            )
        }
    }

}
