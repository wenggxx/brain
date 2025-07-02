import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
        <a routerLink="/trivia" routerLinkActive="active">Trivia</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </div>
      <button class="login-btn" (click)="onLogin()">Login</button>
    </nav>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // constructor(private router: Router) {}

  // reloadTrivia(event: MouseEvent) {
  //   event.preventDefault(); // prevent default link navigation

  //   const currentUrl = this.router.url;

  //   if (currentUrl === '/trivia') {
  //     // Force a route reload
  //     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //       this.router.navigate(['/trivia']);
  //     });
  //   } else {
  //     this.router.navigate(['/trivia']);
  //   }
  // }

  onLogin() {
    alert('Login clicked!');
  }
}

