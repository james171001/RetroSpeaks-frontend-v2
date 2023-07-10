import { Component } from '@angular/core';

interface AnswerOption {
  text: string;
  selected?: boolean;
}

interface Question {
  question: string;
  answerType: string;
  answerOptions?: AnswerOption[];
  selectedOption?: number;
  minValue?: string;
  maxValue?: string;
}

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent {
  surveyTitle!: string;
  questions: Question[] = [];

  addQuestion() {
    this.questions.push({
      question: '',
      answerType: 'multiple-choice',
      answerOptions: [],
    });
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
  }

  addAnswerOption(question: Question) {
    if (!question.answerOptions) {
      question.answerOptions = [];
    }
    question.answerOptions.push({ text: '', selected: false });
  }

  removeAnswerOption(question: Question, index: number) {
    if (question.answerOptions) {
      question.answerOptions.splice(index, 1);
    }
  }

  resetAnswerOptions(question: Question) {
    question.answerOptions = [];
  }

  submitSurvey() {
    console.log('Title:', this.surveyTitle);
    console.log('Questions:', this.questions);
  }
}
