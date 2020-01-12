import { Component } from '@angular/core';


export class Post {
  title: string;  
  content: string;  
  loveIts: number;  
  created_at: Date

  constructor()
  {
    this.created_at = new Date();
  }
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  public posts: Array<Post>;

  constructor()
  {
    this.posts = [
      {
        title:"Post 0",
        content: "Ceci est un premier post",
        loveIts:0,
        created_at: new Date()
      },
      {
        title:"Post 1",
        content: "Ceci est un deuxième post",
        loveIts:1,
        created_at: new Date()
      },
      {
        title:"Post 2",
        content: "Ceci est un troisième post",
        loveIts:0,
        created_at: new Date()
      },
    ]
  }
}
