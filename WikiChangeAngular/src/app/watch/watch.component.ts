import { Component, OnInit } from '@angular/core';

import { Article } from '../articles/shared/article.model';
import { ArticlePost } from '../articles/shared/article-post.model';
import { ArticleService } from '../articles/shared/article.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  model: ArticlePost;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.model = new ArticlePost('', [new Article()]);
  }
  onSubmit() {
    this.articleService.post(this.model);
  }

}
