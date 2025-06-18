import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="top-menu">
      <div class="top-menu-left">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/news" routerLinkActive="active">News</a>
        <a routerLink="/games" routerLinkActive="active">Games</a>
        <a routerLink="/learn" routerLinkActive="active">Learn</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </div>
      <button class="login-btn" (click)="onLogin()">Login</button>
    </nav>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  onLogin() {
    alert('Login clicked!');
  }
}