import { Injectable } from '@angular/core';
import allPosts from '../allPosts/allPosts';
import { IAllPosts } from '../allPosts/allPostsModule';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  allPosts: IAllPosts[] = allPosts;

  getAllPosts() {
    return this.allPosts[0]
  }
}
