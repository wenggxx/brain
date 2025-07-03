import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="top-menu">
      <div class="menu-left-wrapper">
        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          &#9776;
        </button>

        <div class="top-menu-left" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Home</a>
          <a routerLink="/news" routerLinkActive="active" (click)="closeMenu()">News</a>
          <a routerLink="/games" routerLinkActive="active" (click)="closeMenu()">Games</a>
          <a routerLink="/trivia" routerLinkActive="active" (click)="closeMenu()">Trivia</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
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

  closeMenu() {
    this.menuOpen = false;
  }

  onLogin() {
    alert('Login clicked!');
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}
