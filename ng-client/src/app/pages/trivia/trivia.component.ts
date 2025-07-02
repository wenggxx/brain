import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivia.component.html',
  // styleUrls: ['./about.css']
})
export class TriviaComponent {
  

  questionData: any = null;
  selectedChoiceIndex: number | null = null;
  isCorrect: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    fetch(`${environment.apiBaseUrl}/api/trivia`)
      .then(response => response.json())
      .then(data => {
        const raw = data[0]._result;
        this.questionData = typeof raw === 'string' ? JSON.parse(raw) : raw;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  onChoiceClick(index: number): void {
    this.selectedChoiceIndex = index;
    this.isCorrect = this.questionData.choices[index].is_correct === 1;
  }
}