import {Component, OnInit} from '@angular/core';
import {BlogService} from "../shared/blog.services";
import {ActivatedRoute, Router} from "@angular/router";
import {Blog} from "../shared/blog";

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

    title: string;

    post: Blog = new Blog();

    constructor(private blogService: BlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        var id = this.activatedRoute.params.subscribe(params => {
            var id = params['id'];

            this.blogService.getPost(id).subscribe(
                post => this.post = post,
                response => {
                    if (response.status === 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }
}
