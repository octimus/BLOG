import { Component } from '@angular/core';


export class Post {
  title: string;  
  content: string;  
  loveIts: number;  
  created_at: Date

  constructor(title:string, content:string, love:number=0)
  {
    this.title = title;
    this.content = content;
    this.loveIts = love;
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
      new Post("Premier Post", "Ceci est mon premier post"),
      new Post("Deuxième Post", "Ceci est mon deuxième post", 10),
      new Post("Deuxième Post", "Ceci est mon troisième post"),
      new Post("Troisième Post", "Ceci est mon quatrième post", 2),
    ]
  }
}
