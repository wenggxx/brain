import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  // styleUrls: ['./home.css']
})
export class HomeComponent {
  articles: any[] = [];
  loading = true;
  today = new Date();

  constructor(private router: Router) {}

  ngOnInit() {
    fetch(`${environment.apiBaseUrl}/api/home`)
      .then(res => res.json())
      .then(data => {
        this.articles = data;
        this.loading = false;
      })
      .catch(() => this.loading = false);
  }

  goToNews(id: number) {
    this.router.navigate(['/news', id]);
  }
}