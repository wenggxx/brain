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

interface UserSelection {
  selectedChoiceIndex: number | null;
  isCorrect: boolean | null;
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
  
  // Store selection per question index
  userSelections: UserSelection[] = [];

  constructor() {}

  ngOnInit(): void {
    fetch(`${environment.apiBaseUrl}/api/trivia`)
      .then(response => response.json())
      .then(data => {
        // Parse each _result string to JSON object
        this.questions = data.map((item: any) =>
          typeof item._result === 'string' ? JSON.parse(item._result) : item._result
        );
        // Initialize userSelections array with empty selections
        this.userSelections = this.questions.map(() => ({
          selectedChoiceIndex: null,
          isCorrect: null,
        }));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  get currentQuestion(): Question | null {
    return this.questions.length > 0 ? this.questions[this.currentIndex] : null;
  }

  get currentSelection(): UserSelection {
    return this.userSelections[this.currentIndex] || { selectedChoiceIndex: null, isCorrect: null };
  }

  onChoiceClick(index: number): void {
    if (!this.currentQuestion) return;

    const isCorrect = this.currentQuestion.choices[index].is_correct === 1;

    // Save user selection for current question
    this.userSelections[this.currentIndex] = {
      selectedChoiceIndex: index,
      isCorrect,
    };
  }

  nextQuestion(): void {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    }
  }

  prevQuestion(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}