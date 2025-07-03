import { Component, HostListener, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="top-menu">
      <div class="menu-left-wrapper" #menuWrapper>
        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          &#9776;
        </button>

        <div class="top-menu-left" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
          <a routerLink="/news" routerLinkActive="active">News</a>
          <a routerLink="/games" routerLinkActive="active">Games</a>
          <a routerLink="/trivia" routerLinkActive="active">Trivia</a>
          <a routerLink="/about" routerLinkActive="active">About</a>
        </div>
      </div>

      <button class="login-btn" (click)="onLogin()">Login</button>
    </nav>
  `,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuOpen = false;

  constructor(private eRef: ElementRef) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  onLogin() {
    alert('Login clicked!');
  }

  // 👇 Close menu if click is outside the component
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}
