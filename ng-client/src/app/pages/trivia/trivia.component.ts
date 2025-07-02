import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

interface Choice {
  choice: string;
  is_correct: number;
}

interface Question {
  question: string;
  choices: Choice[];
  explanation: string;
}

@Component({
  selector: 'app-trivia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trivia.component.html',
  // styleUrls: ['./about.css']
})

export class TriviaComponent {
  questions: Question[] = [];
  currentIndex = 0;
  selectedChoiceIndex: number | null = null;
  isCorrect: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
    fetch(`${environment.apiBaseUrl}/api/trivia`)
      .then(response => response.json())
      .then(data => {
        // Parse each _result string to JSON object
        this.questions = data.map((item: any) =>
          typeof item._result === 'string' ? JSON.parse(item._result) : item._result
        );
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  get currentQuestion(): Question | null {
    return this.questions.length > 0 ? this.questions[this.currentIndex] : null;
  }

  onChoiceClick(index: number): void {
    this.selectedChoiceIndex = index;
    if (!this.currentQuestion) return;
    this.isCorrect = this.currentQuestion.choices[index].is_correct === 1;
  }

  nextQuestion(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.resetSelection();
    }
  }

  prevQuestion(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.resetSelection();
    }
  }

  resetSelection(): void {
    this.selectedChoiceIndex = null;
    this.isCorrect = null;
  }
}