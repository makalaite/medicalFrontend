import { Component, OnInit } from '@angular/core';
import {BlogService} from "./shared/blog.services";
import {Post} from "../admin/posts/shared/post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getPosts().subscribe(
        posts => this.posts = posts,
        (error: Response) => console.log(error)
    );
  }
}
