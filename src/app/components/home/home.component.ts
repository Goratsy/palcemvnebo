import { Component, OnInit } from '@angular/core';
import { IAllPosts } from 'src/app/allPosts/allPostsModule';
import { PostsService } from 'src/app/servises/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isShowPost: boolean = false;
  showPost() {
    this.isShowPost = true
  }

  constructor(public allPostsService: PostsService) { }
  post: IAllPosts = this.allPostsService.getAllPosts();
  
}
