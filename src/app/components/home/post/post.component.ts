import { Component, Input, OnInit } from '@angular/core';
import { IAllPosts } from 'src/app/allPosts/allPostsModule';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post!: IAllPosts;

  constructor() { }

  ngOnInit(): void {
  }

}
