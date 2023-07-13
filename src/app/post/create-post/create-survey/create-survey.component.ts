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
  isSubmitDisabled: boolean | null = null;

  constructor() {
    this.addQuestion(); // Automatically add one question container when the component is initialized
    this.updateSubmitButtonState();
  }

  addQuestion() {
    this.questions.push({
      question: '',
      answerType: 'multiple-choice',
      answerOptions: [],
    });
    this.updateSubmitButtonState();
  }

  removeQuestion(index: number) {
    this.questions.splice(index, 1);
    this.updateSubmitButtonState();
  }

  addAnswerOption(question: Question) {
    if (!question.answerOptions) {
      question.answerOptions = [];
    }
    question.answerOptions.push({ text: '', selected: false });
    this.updateSubmitButtonState();
  }

  removeAnswerOption(question: Question, index: number) {
    if (question.answerOptions) {
      question.answerOptions.splice(index, 1);
      this.updateSubmitButtonState();
    }
  }

  resetAnswerOptions(question: Question) {
    question.answerOptions = [];
    this.updateSubmitButtonState();
  }

  areRequirementsMet(): boolean {
    const hasTitle = !!this.surveyTitle && this.surveyTitle.trim() !== '';
    const hasQuestions = this.questions.length > 0;
    const hasAnswerOptions = this.questions.some(
      (question) =>
        question.answerOptions !== undefined &&
        question.answerOptions.length >= 2
    );
    return hasTitle && hasQuestions && hasAnswerOptions;
  }  

  updateSubmitButtonState(): void {
    const hasTitle = !!this.surveyTitle && this.surveyTitle.trim() !== '';
    const hasQuestions = this.questions.length > 0;
    const hasAnswerOptions = this.questions.some(
      (question) =>
        question.answerOptions !== undefined &&
        question.answerOptions.length >= 2
    );
    this.isSubmitDisabled = !(hasTitle && hasQuestions && hasAnswerOptions);
  }  

  submitSurvey() {
    console.log('Title:', this.surveyTitle);
    console.log('Questions:', this.questions);
  }
}
