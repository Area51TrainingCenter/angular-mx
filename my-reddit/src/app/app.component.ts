import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 5),
      new Article('Semantic', 'https://semantic-ui.com/', 8),
      new Article('Bootstrap', 'https://getbootstrap.com/', 4)
    ]
  }
}
