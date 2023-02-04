import { Injectable } from '@angular/core';
import allPosts from '../allPosts/allPosts';
import { IAllPosts } from '../allPosts/allPostsModule';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  allPosts: IAllPosts[] = allPosts;
  lovesPosts: IAllPosts[] = [];
  isShowPost: boolean = false;

  toggleIsShowPost() {
    this.isShowPost = true;
    return this.isShowPost;
  }

  getPost() {
    let randomNumber: number = Math.random();
    let lengthPosts: number = allPosts.length;

    let total: number = Math.ceil(randomNumber * lengthPosts) - 1;

    console.group('Random number')
    console.log(randomNumber, lengthPosts, total);
    console.log('Link: ', this.allPosts[total].link);
    console.groupEnd()

    return this.allPosts[total];
  }

  getAllPosts() {
    return this.allPosts;
  }

  addPosttoAllPosts(post: IAllPosts) {
    this.allPosts.push(post)
  }

  pushPostToLoves(post: IAllPosts) {
    this.lovesPosts.push(post);
    console.log('You add in love');
    
  }

  removePostToLoves(post: IAllPosts) {
    this.lovesPosts = this.lovesPosts.filter(data => {
      // console.group("Data and post")
      // console.log('Data', data.id);
      // console.log('Post', post.id);
      // console.groupEnd()
      
      return data.id != post.id
      
    })
    
    console.log(this.lovesPosts);
    console.log('You remove in love');
  }

  getAllLoves() {
    return this.lovesPosts;
  }

}
