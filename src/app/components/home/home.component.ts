import { Component, OnInit } from '@angular/core';
import { IAllPosts } from 'src/app/allPosts/allPostsModule';
import { PostsService } from 'src/app/servises/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(public allPostsService: PostsService) { }
  post: IAllPosts;
  isShowPost: boolean = this.allPostsService.isShowPost;

  showPost() {
    this.isShowPost = this.allPostsService.toggleIsShowPost();
    this.post = this.allPostsService.getPost();
  }

  ngOnInit(): void {
    this.post = this.allPostsService.getPost();
  }
}
