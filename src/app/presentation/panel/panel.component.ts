import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/domain/user.entity';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
userId: number | null = null;
  posts: Post[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { userId: number; posts: Post[] };

    if (state) {
      this.userId = state.userId;
      this.posts = state.posts;
    }
  }
}
