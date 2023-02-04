import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/servises/posts.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isShowCreatingPost: boolean = false;
  isValid: boolean = false;

  constructor(private postservice: PostsService) { }

  ngOnInit(): void {
  }

  showCreatingPost() {
    this.isShowCreatingPost = !this.isShowCreatingPost;
  }

  formEvent: FormGroup = new FormGroup({
    nameUser: new FormControl('', Validators.required),
    emailUser: new FormControl('', [Validators.required, Validators.email]),
    title: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    date: new FormControl(''),
    link: new FormControl('', Validators.required),
  })

  sumbitFormEvent() {
    let event = this.formEvent.value;
    event.isLove = false;
    if (!event.date) {
      event.date = 'Нет точной даты';
    }
    console.log(event);
    
    this.postservice.addPosttoAllPosts(event);
    // this.formEvent.reset()
  }

}
