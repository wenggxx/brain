import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-show-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-news.component.html',
  // styleUrls: ['./show-news.css']
})
export class ShowNewsComponent {
  news: any = null;
  loading = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    fetch(`${environment.apiBaseUrl}/api/news/${encodeURIComponent(id ?? '')}`)
      .then(res => res.json())
      .then(data => {
        this.news = Array.isArray(data) ? data[0] : null;
        this.loading = false;
      })
      .catch(() => this.loading = false);
  }
}