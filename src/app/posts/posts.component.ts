import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts = [
    {title: `this is ugly and you need to change it asap!
    also, I don't know if I like the blue anymore, wait I do.`
  },{
    title: `this is ugly and you need to change it asap!
    also, I don't know if I like the blue anymore, wait I do.`
  }, {
    title: `this is ugly and you need to change it asap!
    also, I don't know if I like the blue anymore, wait I do.`
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
