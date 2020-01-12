import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  constructor() {
    console.table(this.post)
  }

  public loveIt(i)
  {
    if(this.post.loveIts+i<=1 && this.post.loveIts+1>=1)
      this.post.loveIts += i;
  }
  ngOnInit() {
  }

}
