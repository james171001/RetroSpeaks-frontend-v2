import { Component } from '@angular/core';

export interface AnswerOption {
  text: string;
  selected?: boolean;
}

export interface Question {
  question: string;
  answerType: string;
  answerOptions?: AnswerOption[];
  selectedOption?: number | number [] | string | any;
  minValue?: number;
  maxValue?: number;
  selectedValue?: number;
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

  // Define constants for answer types
  readonly SINGLE_CHOICE: 'single-choice' = 'single-choice';
  readonly MULTIPLE_CHOICE: 'multiple-choice' = 'multiple-choice';
  readonly LINEAR_SCALE: 'linear-scale' = 'linear-scale';

  // Additional variables to handle the conditions
  showAnswerOptions: boolean = false;
  showLinearScaleOptions: boolean = false;

  constructor() {
    this.addQuestion();
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
        question.answerOptions !== undefined && question.answerOptions.length >= 2
    );
    return hasTitle && hasQuestions && hasAnswerOptions;
  }

  updateSubmitButtonState(): void {
    const hasTitle = !!this.surveyTitle && this.surveyTitle.trim() !== '';
    const hasQuestions = this.questions.length > 0;
    const hasAnswerOptions = this.questions.some(
      (question) =>
        question.answerOptions !== undefined && question.answerOptions.length >= 2
    );
    this.isSubmitDisabled = !(hasTitle && hasQuestions && hasAnswerOptions);
  }

  onAnswerTypeChange(question: Question) {
    this.showAnswerOptions =
      question.answerType === this.SINGLE_CHOICE ||
      question.answerType === this.MULTIPLE_CHOICE;
    this.showLinearScaleOptions = question.answerType === this.LINEAR_SCALE;
    this.updateSubmitButtonState();
  }

  submitSurvey() {
    console.log('Title:', this.surveyTitle);
    console.log('Questions:', this.questions);
  }
}
