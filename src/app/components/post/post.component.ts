import { Component, Input } from '@angular/core';
import { IAllPosts } from 'src/app/allPosts/allPostsModule';
import { PostsService } from 'src/app/servises/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: IAllPosts;

  constructor(private postService: PostsService) { }


  addLoveUser() {
    this.postService.pushPostToLoves(this.post);
    this.post.isLove = true;
  }

  removeNoLoveUser() {
    this.postService.removePostToLoves(this.post);
    this.post.isLove = false;
  }

}
