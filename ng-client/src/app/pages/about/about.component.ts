import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  // styleUrls: ['./about.css']
})
export class AboutComponent {
  message: any[] = [];

  ngOnInit() {
    fetch(`${environment.apiBaseUrl}/api/trivia`)
      .then(res => res.json())
      .then(data => this.message = data);
  }
}