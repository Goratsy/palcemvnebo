import { Component, OnInit } from '@angular/core';
import { IAllPosts } from 'src/app/allPosts/allPostsModule';
import { PostsService } from 'src/app/servises/posts.service';

@Component({
  selector: 'app-loves',
  templateUrl: './loves.component.html',
  styleUrls: ['./loves.component.css']
})
export class LovesComponent implements OnInit {
  isLovePosts: boolean = false;

  constructor(public postsService: PostsService) { }
  allPosts: IAllPosts[] = this.postsService.getAllLoves();


  ngOnInit(): void {
    console.log(this.allPosts);
    console.log(this.allPosts.length == 0);
    

    if (this.allPosts.length != 0) {
      this.isLovePosts = true;
    }
  }

  

}
